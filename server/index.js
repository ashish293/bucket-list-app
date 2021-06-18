const express = require('express');
const { db } = require('./database');

const PORT = 8888;
const app = express();

const mount = () => {
    app.listen(PORT);
    console.log('Server is running at port 8888');
};

db.on('error', (error) => {
    console.error('Error connecting to Mongo', error);
});

db.on('open', (error) => {
    console.log('Successfully connected to MongoDb');
});

app.use('/abc', (req, res) => {
    res.send('Hello world');
});

mount(app);
