const express = require('express');
const database = require('../config/database');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv/config');
const { verifyJWT} = require('../config/authentication');

// Login
router.post('/login', (req, res) => {
    const { cnpj, password } = req.body;
    const selectQuery = "SELECT * FROM gym WHERE cnpj = ?";

    database.query(selectQuery, cnpj, (error, result) => {
        if (error) console.error(error);

        try {
            const {id, cnpj, name, password: responsePassword} = result[0];

            if (password === responsePassword) {
                const token = jwt.sign({sub: id, name}, process.env.SECRET, {
                    expiresIn: 300, //5min
                });

                res.send({user: {id, cnpj, name, password: responsePassword}, auth: true, token});
            } else {
                res.status(401).send({error: 'User unauthorized'});
            }
        } catch(error) {
            res.status(400).send({error: 'CNPJ does not existis on our database'})
            console.error(error);
        }
    })
});


// Students list
router.get('/students/:key', verifyJWT, (req, res) => {
    const { key } = req.params;
    const selectQuery = `SELECT s.id, s.name, s.email, s.phone, s.amountTraining FROM students AS s JOIN gym AS g ON g.cnpj = s.ref_gym WHERE g.id = ? ORDER BY s.name`;
    const token = req.headers['x-access-token'];

    database.query(selectQuery, key, (error, result) => {

        if (error) console.error(error);

        token
            ? res.send(result)
            : res.status(401).send({error: 'User unauthorized'});
    })
});

// Profile
router.get('/profile/:key', verifyJWT, (req, res) => {
    const { key } = req.params;
    const selectQuery = "SELECT password FROM gym WHERE id = ?";
    const token = req.headers['x-access-token'];

    database.query(selectQuery, key, (error, result) => {
        if (error) console.error(error);

        const data = result[0];

        token
            ? res.send({password: data.password})
            : res.status(401).send({error: 'User unauthorized'});
    })
})

// Reset Password
router.patch('/reset-password/:key', verifyJWT, (req, res) => {
    const { key } = req.params;
    const {password} = req.body;
    const updateQuery = "UPDATE gym SET password = ? WHERE id = ?";
    const token = req.headers['x-access-token'];

    database.query(updateQuery, [password, key], (error, result) => {
        if (error) console.error(error);

        token
            ? res.send({message: 'Updated password'})
            : res.status(401).send({error: 'User unauthorized'})
    })
})

// Logout
const blacklist = [];
router.post('/logout', (req, res) => {
    const token = req.headers['x-access-token'];

    blacklist.push(token);
    res.send({message: 'Logged out user'});
})

module.exports = router;