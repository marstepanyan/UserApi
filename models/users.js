const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating users schema and model
const Userschema = new Schema({
    full_name: {
        type: String,
        required: [true, 'Name field is required']
    },
    username: {
        type: String,
        required: [true, 'Name field is required'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email field is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Email field is required'],
        unique: true
    }
});

const User = mongoose.model('user', Userschema);

module.exports = User;
