// Testing porpuses only, it will be removed

const express = require('express');
const db = require('../dbconnect')
const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Testing')
    const {
        query
    } = req.body 

    db.query(query, (err, res, fields) => {
        console.log(res)
    });
});

module.exports = router;