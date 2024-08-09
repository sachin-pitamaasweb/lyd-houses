// import React, { useState } from 'react';
// import './style.css';

// const GetConnected = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         phone: '',
//         email: '',
//         enquiry: ''
//     });
//     const [error, setError] = useState({
//         name: '',
//         phone: '',
//         email: '',
//         enquiry: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const validateForm = () => {
//         let isValid = true;
//         let newError = { name: '', phone: '', email: '', enquiry: '' };

//         const { name, phone, email, enquiry } = formData;

//         if (!name) {
//             newError.name = 'Name is required';
//             isValid = false;
//         }
//         if (!phone) {
//             newError.phone = 'Phone number is required';
//             isValid = false;
//         } else if (!/^\d{10}$/.test(phone)) {
//             newError.phone = 'Phone number must be 10 digits';
//             isValid = false;
//         }
//         if (!email) {
//             newError.email = 'Email is required';
//             isValid = false;
//         } else if (!/\S+@\S+\.\S+/.test(email)) {
//             newError.email = 'Invalid email address';
//             isValid = false;
//         }
//         if (!enquiry) {
//             newError.enquiry = 'Enquiry is required';
//             isValid = false;
//         }

//         setError(newError);
//         return isValid;
//     };


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validateForm()) {
//             console.log(formData);
//         }
//     }

//     return (
//         <div className="get-connected">
//             <h2>Get Connected</h2>
//             <form onSubmit={handleSubmit}>
//                 <input 
//                     type="text" 
//                     name="name" 
//                     placeholder="Name" 
//                     value={formData.name} 
//                     onChange={handleChange} 
//                 />
//                   {error.name && <div className="error">{error.name}</div>}
//                 <input 
//                     type="text" 
//                     name="phone" 
//                     placeholder="Phone No." 
//                     value={formData.phone} 
//                     onChange={handleChange} 
//                 />
//                   {error.phone && <div className="error">{error.phone}</div>}
//                 <input 
//                     type="email" 
//                     name="email" 
//                     placeholder="Email Address" 
//                     value={formData.email} 
//                     onChange={handleChange} 
//                 />
//                   {error.email && <div className="error">{error.email}</div>}
//                 <textarea 
//                     name="enquiry" 
//                     placeholder="Enquiry about......" 
//                     value={formData.enquiry} 
//                     onChange={handleChange} 
//                 ></textarea>
//                   {error.enquiry && <div className="error">{error.enquiry}</div>}
//                 <button type="submit">SEND</button>
//             </form>
//         </div>
//     );
// };

// export default GetConnected;


import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Snackbar, Alert } from '@mui/material';
import './style.css';

const GetConnected = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        enquiry: ''
    });
    const [error, setError] = useState({
        name: '',
        phone: '',
        email: '',
        enquiry: ''
    });
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        let isValid = true;
        let newError = { name: '', phone: '', email: '', enquiry: '' };

        const { name, phone, email, enquiry } = formData;

        if (!name) {
            newError.name = 'Name is required';
            isValid = false;
        }
        if (!phone) {
            newError.phone = 'Phone number is required';
            isValid = false;
        } else if (!/^\d{10}$/.test(phone)) {
            newError.phone = 'Phone number must be 10 digits';
            isValid = false;
        }
        if (!email) {
            newError.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newError.email = 'Invalid email address';
            isValid = false;
        }
        if (!enquiry) {
            newError.enquiry = 'Enquiry is required';
            isValid = false;
        }

        setError(newError);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const serviceId = 'service_bcfj54a';
            const templateId = 'template_epq12gl';
            const publicKey = 'XTdLZxtsN_NgT6nda';
            const templateParams = {
                firstName: formData.name,
                phone: formData.phone,
                email: formData.email,
                enquiry: formData.enquiry
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
                    name: '',
                    phone: '',
                    email: '',
                    enquiry: ''
                });
            }
        }
    }

    return (
        <div className="get-connected">
            <h2>Get Connected</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={formData.name} 
                    onChange={handleChange} 
                />
                {error.name && <div className="error">{error.name}</div>}
                <input 
                    type="text" 
                    name="phone" 
                    placeholder="Phone No." 
                    value={formData.phone} 
                    onChange={handleChange} 
                />
                {error.phone && <div className="error">{error.phone}</div>}
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email Address" 
                    value={formData.email} 
                    onChange={handleChange} 
                />
                {error.email && <div className="error">{error.email}</div>}
                <textarea 
                    name="enquiry" 
                    placeholder="Enquiry about......" 
                    value={formData.enquiry} 
                    onChange={handleChange} 
                ></textarea>
                {error.enquiry && <div className="error">{error.enquiry}</div>}
                <button type="submit">SEND</button>
            </form>

            {/* Snackbar Alert for success or error */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={() => setOpenSnackbar(false)}
            >
                <Alert
                    onClose={() => setOpenSnackbar(false)}
                    severity={snackbarSeverity}
                    sx={{ width: '100%' }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default GetConnected;
