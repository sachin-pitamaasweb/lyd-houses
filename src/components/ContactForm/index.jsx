import React, { useState } from 'react';

import {
    Grid,
    TextField,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    // useTheme,
    // useMediaQuery
    Alert,
    Snackbar
} from '@mui/material';
import emailjs from 'emailjs-com';

import './style.css';

const enquiryOptions = [
    { value: 'sales', label: 'Sales' },
    { value: 'support', label: 'Support' },
    { value: 'feedback', label: 'Feedback' },
];


const ContactForm = () => {
    // const theme = useTheme();
    // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });
    const [enquiry, setEnquiry] = useState('');
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleChangeDrop = (event) => {
        setEnquiry(event.target.value)
    }


    const validateForm = () => {
        let valid = true;
        const newErrors = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        };

        // Validation rules
        if (formData.firstName.trim() === '') {
            newErrors.firstName = 'First Name is required';
            valid = false;
        } else if (formData.firstName.length > 50) {
            newErrors.firstName = 'First Name should not exceed 50 characters';
            valid = false;
        }

        if (formData.lastName.trim() === '') {
            newErrors.lastName = 'Last Name is required';
            valid = false;
        } else if (formData.lastName.length > 50) {
            newErrors.lastName = 'Last Name should not exceed 50 characters';
            valid = false;
        }

        if (formData.email.trim() === '') {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (formData.email.length > 100) {
            newErrors.email = 'Email should not exceed 100 characters';
            valid = false;
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
            valid = false;
        }
        if (formData.phone.trim() === '') {
            newErrors.phone = 'Phone Number is required';
            valid = false;
        } else if (!/^\d+$/.test(formData.phone)) {
            newErrors.phone = 'Phone Number should contain only numbers';
            valid = false;
        } else if (formData.phone.length > 15) {
            newErrors.phone = 'Phone Number should not exceed 15 digits';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };
    const isValidEmail = (email) => {
        // Basic email validation regex (you can use a more sophisticated regex if needed)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (validateForm()) {
    //         // Form submission logic here
    //         console.log('Form submitted:', formData);
    //     } else {
    //         console.log('Form has errors. Please fix them.');
    //     }
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            const serviceId = 'service_bcfj54a';
            const templateId = 'template_epq12gl';
            const publicKey = 'XTdLZxtsN_NgT6nda';
            const templateParams = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                enquiry,
            };

            try {
                const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
                if (response) {
                    setSnackbarMessage('Form submitted successfully!');
                    setSnackbarSeverity('success');
                }
                setOpenSnackbar(true);
            } catch (error) {
                console.error('Error sending email:', error);
                setSnackbarMessage('Failed to submit form. Please try again later.');
                setSnackbarSeverity('error');
                setOpenSnackbar(true);
            } finally {
                // Clear form data after submission
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                });
                setEnquiry('');
            }
        } else {
            console.log('Form has errors. Please fix them.');
        }
    };

    const handleAddressClick = () => {
        window.open('https://maps.app.goo.gl/Ez3spstSczxtgAQZ8', '_blank');
    };

    const handlePhoneClick = () => {
        window.open('tel:+16262464614', '_blank');
    };

    const handleEmailClick = () => {
        window.open('mailto:sales@lydhousing.com', '_blank');
    };

    // const imgUrl1 = isMobile ? "https://res.cloudinary.com/dtivafy25/image/upload/v1720181802/img-1_rlx9kq.svg" : "https://res.cloudinary.com/dtivafy25/image/upload/v1720181682/img-1_o1d517.svg"
    // const imgUrl2 = isMobile ? "https://res.cloudinary.com/dtivafy25/image/upload/v1720181803/img-2_yxc2q1.svg" : "https://res.cloudinary.com/dtivafy25/image/upload/v1720181683/img-2_fmp5nu.svg"

    return (
        <>
            <Grid container spacing={2} className='contact-form-container'>
                <Grid item xs={12} sm={12} md={6} lg={6} className='img-grid-item'>
                    <div className='contact-form-text'>
                        <h5>Engage with</h5>
                        <h3>OUR TEAM</h3>
                    </div>
                    {/* <div className='contact-form-img'>
                        <div className='img-1'>
                            <img src={imgUrl1} alt={'contact-img'} className='img-contact' loading="lazy" />
                        </div>
                        <div className='img-2'>
                            <img src={imgUrl2} alt={'contact-img'} className='img-contact-1' loading="lazy" />
                        </div>
                    </div> */}
                </Grid>
                <Grid item xx={12} sm={12} md={6} lg={6} className='contact-form'>
                    <form className='form-tag' onSubmit={handleSubmit}>
                        <TextField
                            id='first-name'
                            label='First Name'
                            placeholder='First Name'
                            fullWidth
                            name='first name'
                            value={formData.firstName}
                            variant='standard'
                            className='input-box'
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            error={!!errors.firstName}
                            helperText={errors.firstName}

                        />
                        <TextField
                            id='last-name'
                            label='Last Name'
                            placeholder='Last Name'
                            fullWidth
                            name='last name'
                            value={formData.lastName}
                            variant='standard'
                            className='input-box'
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            error={!!errors.lastName}
                            helperText={errors.lastName}
                        />
                        <TextField
                            id='email'
                            label='Where can we write to you?'
                            placeholder='Email Address'
                            fullWidth
                            name='email'
                            value={formData.email}
                            variant='standard'
                            className='input-box'
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                        <TextField
                            id='phone'
                            label='Your phone number?'
                            placeholder='Phone Number'
                            fullWidth
                            name='phone'
                            value={formData.phone}
                            variant='standard'
                            className='input-box'
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            error={!!errors.phone}
                            helperText={errors.phone}

                        />
                        <FormControl variant='standard' fullWidth className='input-box'>
                            <InputLabel id='enquiry'>What is your enquiry regarding?</InputLabel>
                            <Select
                                labelId='enquiry'
                                id='enquiry'
                                value={enquiry}
                                onChange={handleChangeDrop}
                                label='What is your enquiry regarding?'
                            >
                                {enquiryOptions.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <div className='submit-div'>
                            <button className='submit-btn' type='submit'>Submit</button>
                        </div>
                    </form>
                </Grid>
                <Grid className='contact-info' item xs={12} sm={12} md={4} lg={4}>
                    <h6>Address</h6>
                    <h4 onClick={handleAddressClick}>17 Springdale Way
                        Mechanicsburg,
                        P.A.17050, USA</h4>
                </Grid>
                <Grid className='contact-info' item xs={12} sm={12} md={4} lg={4}>
                    <h6>Contact</h6>
                    <h4 onClick={handlePhoneClick}>+1 6262-464-614</h4>
                </Grid>
                <Grid className='contact-info' item xs={12} sm={12} md={4} lg={4}>
                    <h6>Mail</h6>
                    <h4 onClick={handleEmailClick}>sales@lydhousing.com</h4>
                </Grid>
            </Grid>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    onClose={() => setOpenSnackbar(false)}
                    severity={snackbarSeverity}
                    sx={{ width: '100%' }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </>
    );
};

export default ContactForm;
