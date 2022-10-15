/* WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS */

const express = require('express');
const db = require('../database')
const bc = require('bcrypt')
const exploitPatch = require('../lib/exploitPatch')
const router = require('express').Router();

router.post('/', async (req, res) => {
    const userName = exploitPatch.remove(req.body.userName)
    const password = exploitPatch.remove(req.body.password)
    const email = exploitPatch.remove(req.body.email)

    if(userName.length < 3 || password.length < 6) {
        return res.sendStatus(400)
    }

    if (userName.length > 20) {
        return res.sendStatus(400)
    }

    db.query()

    res.sendStatus(404)
});

module.exports = router;