'use strict';

const express = require('express'),
    router = express.Router();

router.get('/', async (req, res) => {
    res.json("Welcome to Sean's travel Agency").status(200);
});

module.exports = router;