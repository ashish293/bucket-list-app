const mongoose = require('mongoose');

const username = 'admin';
const password = 'tXLm44j1zcG0wKQs';
const cluster = 'cluster0.al3y3';
const dbName = 'myFirstDatabase';

const uri = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbName}?retryWrites=true&w=majority`;

try {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
} catch (error) {
    console.log('ERROR in connecting to MongoDb');
}

const db = mongoose.connection;
const { BucketListItem } = require('./models/BucketListItem');
module.exports = {
    db,
    BucketListItem,
};
