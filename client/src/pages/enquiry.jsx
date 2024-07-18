import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Nav from '../components/home comp/nav';
import Footer from '../components/footer';

const Enquiry = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        review: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send formData to backend API or perform other actions
        console.log(formData);
        // Reset form data after submission (optional)
        setFormData({
            name: '',
            email: '',
            phone: '',
            review: ''
        });
    };

    return (
        <>
        <Nav/>
        <div className="flex flex-col items-center justify-center mt-10">
            <h1 className="text-3xl font-bold mb-8">Enquiry Form</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 items-center bg-white rounded-lg p-8 shadow-lg">
                <TextField
                    name="name"
                    label="Name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    fullWidth
                />
                <TextField
                    name="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    fullWidth
                />
                <TextField
                    name="phone"
                    label="Phone"
                    variant="outlined"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    fullWidth
                />
                <TextField
                    name="review"
                    label="Review"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={formData.review}
                    onChange={handleChange}
                    fullWidth
                />
                <Button type="submit" variant="contained" color="primary" sx={{ width: '100%', maxWidth: '200px' }}>
                    Submit
                </Button>
            </form>
        </div>
        <Footer/>
        </>
    );
};

export default Enquiry;
