const express = require('express');
const router = express.Router();
const leaderboard = require('../models/leaderboard');


router.get('/get', async(req, res ) => {

    try {
        const topic = req.query.topic;
        
        const leaderboardRes = await leaderboard.find({topic});
        res.json(leaderboardRes);
    }
    catch(e){
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/add', async(req, res) => {    

    try {
        const { username, score, topic, date } = req.body;
        if (!username || !score || !topic || !date) {
            return res.status(400).json({err: 'All input is required'});
        }

        const newLeaderboard = await leaderboard.create({
            username,
            score,
            topic,
            date
        });

        res.json(newLeaderboard);
    }
    catch(e) {
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;