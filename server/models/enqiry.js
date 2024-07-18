const mongoose = require('mongoose');
import Enquiry from "./models/enqiry";
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    // Remove useNewUrlParser and useUnifiedTopology options
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Define user schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    review: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});


// Define model
const User = mongoose.model('enquiry_form', userSchema);

module.exports = User;
