const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/menuRoute.js')
const app = express();
require('dotenv').config();


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected to Atlas'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

app.use('/api', router);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on port 5000');
    
})