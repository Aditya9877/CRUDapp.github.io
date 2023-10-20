const mongoose = require('mongoose');
const mongoDBURI = 'mongodb://localhost:27017/?readPreference=primary&ssl=false&directConnection=true';

mongoose.connect(mongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});





const express = require('express');
const app = express();
const port = 3000; // You can choose a port of your preference

app.get('/', (req, res) => {
    res.send('Welcome to the dress store'); // This can be replaced with your results
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});