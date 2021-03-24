'use strict';

const express = require('express'),
    fetch = require('node-fetch'),
    router = express.Router();

router.get('/', async (req, res) => {
    const { hplace } = req.query;
    const url = 
    const hotelsData = await fetch(url);
    if (hotelsData) {
        res.send(hotelsData.results);
    } else {
        res.sendStatus(500);
    }
});

module.exports = router;