// const express = require('express')
// const mongoose = require('mongoose')
// const form = require('./routes/form')
// const app = express()
// require('dotenv').config();
// app.use(express.json())
// mongoose.connect(process.env.MONGODB_URI)
//     .then(() => console.log('Connected to MongoDB'))
//     .catch((err) => console.error('Error connecting to MongoDB:', err));
// app.use(form)
// app.listen(process.env.PORT,()=>{
//     console.log('hello world')
// })



// server.js

// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define schema
const enquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  review: String 
});

// Define model
const Enquiry = mongoose.model('Enquiry', enquirySchema);

// API endpoint to handle form submissions
app.post('/enquiry', (req, res) => {
  const { name, email, phone, review } = req.body;
  const enquiry = new Enquiry({ name, email, phone, review })
  console.log(enquiry);
  enquiry.save()
    .then(() => res.json({ message: 'Enquiry submitted successfully' }))
    .catch(err => res.status(500).json({ error: err.message }));
});

// API endpoint to retrieve all enquiries
app.get('/enquiries', async (_req,res) => {
  try {
    const enquiries = await Enquiry.find();
    res.json(enquiries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
