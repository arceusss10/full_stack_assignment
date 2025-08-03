require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const configRoutes = require('./routes/configRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', configRoutes);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () =>
    console.log(`server running on port ${process.env.PORT}`));
})
.catch(err => console.log('MongoDB connection error: ', err));