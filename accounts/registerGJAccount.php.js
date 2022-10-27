/* WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS */

const db = require('../database')
const bc = require('bcrypt')
const exploitPatch = require('../lib/exploitPatch')
const router = require('express').Router();

router.post('/', async (req, res) => {
    const userName = exploitPatch.remove(req.body.userName)
    const password = exploitPatch.remove(req.body.password)
    // const email = exploitPatch.remove(req.body.email)

    console.log(req.body)

    if (userName.length < 3 || password.length < 6) {
        return res.sendStatus(400)
    }

    if (userName.length > 20) {
        return res.sendStatus(400)
    }

    const hashedPW = await bc.hash(password.toString(), 10)
    console.log(hashedPW)
});

module.exports = router;