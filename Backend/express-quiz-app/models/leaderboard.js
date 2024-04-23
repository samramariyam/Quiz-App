const mongoose = require('mongoose');

const schema = mongoose.Schema({
    
    username: String,
    score: Number,
    topic: String,
    date: String
});

const leaderboard = mongoose.model('leaderboard', schema);
module.exports = leaderboard;