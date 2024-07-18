const express = require('express');
const router = express.Router();
const User = require('../models/enqiry');

router.post('/enquiry', async (req, res) => {
    try {
        const { name, email, phone, review } = req.body;
        const newUser = new User({ name, email, phone, review });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
});

module.exports = router;
