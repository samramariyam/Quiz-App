const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const router = require('./routes/questions.routes');
const leaderboardRouter = require('./routes/leaderboard.routes');

// connect to db
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to db');
}).catch((err) => {
    console.log(err);
});

// express setup
const app = express();
const PORT = process.env.PORT || 8080;

// middlwares
app.use(cors());
app.use(express.json());

// routes
app.use('/questions', router);
app.use('/leaderboard', leaderboardRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});