const express = require('express');
const router = express.Router();
const questions = require('../models/questions');

router.post('/add', async (req, res) => {

    try {
        
        const { topic, question, options, answer } = req.body;
        if (!topic || !question || !options || !answer) {
            return res.status(400).json({err: 'All input is required'});
        }

        const newQuestion = await questions.create({
            topic,
            question,
            options,
            answer
        });

        res.json(newQuestion);
    }
    catch(e) {
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/topic', async (req, res) => {
    try {
       
        const topic = req.query.topic;
        if (!topic) {
            return res.status(400).json({err: 'Topic is required'});
        }

        const questionRes = await questions.find({topic});
        res.json(questionRes);
    }
    catch(e) {
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
});






module.exports = router;