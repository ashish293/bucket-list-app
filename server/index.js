const express = require('express');
const { db, BucketListItem } = require('./database');

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

app.use('/bucket-list/add', async (req, res) => {
    // res.send('Hello world');
    const item = await BucketListItem.create({
        title: 'Go to japan',
    });
    res.status(200).json({
        data: {
            item,
        },
    });
});

mount(app);
