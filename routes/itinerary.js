const express = require('express'),
    router = express.Router(),
    vacationModel = require('../models/vacationModel'),
    activitiesModel = require('../models/activitiesModel');
    

router.get('/', async (req,res) => {
    const vacationsData = await vacationModel.getAll();

    res.json(vacationsData).status(200);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    console.log('id', req.params)
    const vacation = await vacationModel.getById(id);

    if (vacation) {
        res.json(vacation).status(200);
    } else {
        res.status(404).send(`No vacation by that name`)
    }
});

router.post('/add', async (req, res) => {
    const { day, vacation_id, breakfast, morning_a, lunch, afternoon_a, dinner, evening_a } = req.body;
    console.log('reqBody: ', req.body)
    const response = await activitiesModel.addDay(day, vacation_id, breakfast, morning_a, lunch, afternoon_a, dinner, evening_a);
    if (response) {
        res.sendStatus(200)
    } else {
        res.sendStatus(500)
    }
})

router.post('/updateDays', async (req, res) => {
    const { id, days } = req.body;
    console.log('reqBody: ', req.body)
    const response = await vacationModel.updateDays(id, days);
    if (response) {
        res.sendStatus(200)
    } else {
        res.sendStatus(500)
    }
})

module.exports = router;