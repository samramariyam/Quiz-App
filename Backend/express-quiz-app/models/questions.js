const mongoose = require('mongoose');

const schema = mongoose.Schema({
    topic: String,
    question: String,
    options: [String],
    answer: String
});

const questions = mongoose.model('questions', schema);
module.exports = questions;