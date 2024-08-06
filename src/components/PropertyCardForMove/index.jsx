import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    TextField
} from '@mui/material';

// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CloseIcon from '@mui/icons-material/Close';

import MoveIcon from '../MoveIcon';
import CommingSoon from '../ComingSoon';

import './style.css';

const svgContent = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" /></svg>';

const PropertyCard = ({ property, isFormSubmitted, setIsFormSubmitted }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const svgRef = useRef(null);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);



    const handleContact = () => {
        navigate('/contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
    };

    // const handleMap = () => {
    //     console.log("map");
    // };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        // Name validation
        if (form.name.trim() === '') {
            newErrors.name = 'Name is required';
            isValid = false;
        } else if (form.name.length > 50) {
            newErrors.name = 'Name must be less than 50 characters';
            isValid = false;
        }

        // Email validation
        if (form.email.trim() === '') {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = 'Email is invalid';
            isValid = false;
        }

        // Phone validation
        if (form.phone.trim() === '') {
            newErrors.phone = 'Phone number is required';
            isValid = false;
        } else if (!/^\d{10}$/.test(form.phone)) {
            newErrors.phone = 'Phone number must be 10 digits';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };


 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Handle form submission
            console.log('Form submitted:', form);
            setIsFormSubmitted(true);
            handleClose();
        }
    };

    // const handleDownload = () => {
    //     const svgString = svgContent;
    //     const blob = new Blob([svgString], { type: 'image/svg+xml' });
    //     const url = URL.createObjectURL(blob);
    //     const link = document.createElement('a');
    //     link.href = url;
    //     link.download = 'image.svg';
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    //     URL.revokeObjectURL(url);
    // };

    return (
        <>
            <svg ref={svgRef} style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: svgContent }} />
            <Card className="property-card">
                <CardMedia
                    component="img"
                    height="200"
                    image={property.image}
                    alt={property.title}
                    className='img-card'
                    loading="lazy"
                />
                <CardContent>
                    <Typography variant="h6" component="div" className='typo-title'>
                        {property.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className='typo-details'>
                        {property.details}
                        <br />
                    </Typography>
                    <div className='span-div'><span style={{ textAlign: 'left' }}>{property.details1}</span></div>
                    <Typography variant="body2" color="textSecondary" className='typo-address'>
                        {property.address}
                    </Typography>
                    <MoveIcon
                     home={property.home}
                     bed={property.beds}
                     bath={property.baths}
                     sqft={property.sqft}
                     garages={property.garages}
                    />
                    <Box className="property-price">
                        {/* <AttachMoneyIcon /> */}
                        {/* <Typography variant="body2">${property.price}</Typography> */}
                    </Box>
                    <Button variant="contained" className="contact-button" onClick={handleContact}>
                        Contact Us
                    </Button>
                    <Box className="property-button">
                        <Button
                            variant="contained"
                            className="contact-button"
                            // onClick={handleClickOpen}
                            // onClick={isFormSubmitted ? handleDownload : handleClickOpen} 
                            onClick={openModal}   
                        >
                            {isFormSubmitted ? 'Download' : 'Floor Plan'}
                        </Button>
                        <Button
                            variant="contained"
                            className="contact-button"
                            // onClick={handleMap}
                            onClick={openModal}
                        >
                            Map
                        </Button>
                    </Box>
                </CardContent>
            </Card>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle className='dialog-title'>
                    Floor Plan
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="name"
                            label="Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={form.name}
                            onChange={handleChange}
                            error={Boolean(errors.name)}
                            helperText={errors.name}
                        />
                        <TextField
                            margin="dense"
                            name="email"
                            label="Email"
                            type="email"
                            fullWidth
                            variant="standard"
                            value={form.email}
                            onChange={handleChange}
                            error={Boolean(errors.email)}
                            helperText={errors.email}
                        />
                        <TextField
                            margin="dense"
                            name="phone"
                            label="Phone"
                            type="tel"
                            fullWidth
                            variant="standard"
                            value={form.phone}
                            onChange={handleChange}
                            error={Boolean(errors.phone)}
                            helperText={errors.phone}
                        />
                        <DialogActions sx={{ justifyContent: 'center' }}>
                            <Button type="submit" color="primary" variant="contained" sx={{
                                mt: 3,
                                mb: 2,
                                backgroundColor: '#8B0000',
                                color: 'white',
                                width: '100%',
                                '&:hover': {
                                    backgroundColor: '#a52a2a'
                                }
                            }}
                                className='dialog-submit-button'
                            >
                                Submit
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
            <CommingSoon isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default PropertyCard;
