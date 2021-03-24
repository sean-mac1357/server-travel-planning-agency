const express = require('express'),
    router = express.Router(),
    vacationModel = require('../models/vacationModel'),
    activitiesModel = require('../models/activitiesModel');

router.get('/', async (req,res) => {
    const vacationsData = await vacationModel.getAll();

    res.json(vacationsData).status(200);
});

router.get('/:guest_name', async (req, res) => {
    const { guest_name } = req.params;
    console.log(req.params)
    const user = await vacationModel.getByGuestName(guest_name);

    if (user) {
        res.json(user).status(200);
    } else {
        res.status(404).send(`No vacations for this user`)
    }
});

router.post('/add', async (req, res) => {
    const { v_name, guest_name, start_date, end_date } = req.body;
    console.log('reqBody: ', req.body)
    let firstDate = new Date(start_date),
        secondDate = new Date(end_date),
        timeDifference = Math.abs(secondDate.getTime() - firstDate.getTime()),
        days = Math.ceil(timeDifference / (1000 * 3600 * 24));
    console.log(days);
    const response = await vacationModel.addEntry(v_name, guest_name, start_date, end_date, days);
    if (response.rowCount >= 1) {
        res.sendStatus(200)
    } else {
        res.sendStatus(500)
    }
});

router.post('/update', async (req, res) => {
    const { id, name_hotel, address_hotel, hotel_lat, hotel_lon } = req.body;
    console.log('reqBody: ', req.body)
    const response = await vacationModel.updateEntry(id, name_hotel, address_hotel, hotel_lat, hotel_lon);
    if (response) {
        res.sendStatus(200)
    } else {
        res.sendStatus(500)
    }
})



module.exports = router;