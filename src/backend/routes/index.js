const express = require('express');
const database = require('../config/database');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv/config');
const { verifyJWT} = require('../config/authentication');
const User = require('../entities/User');

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

                res.send({user: new User(id, cnpj, name), isAuthenticated: true, token});
            } else {
                res.status(401).send({isAuthenticated: false, status: 'User unauthorized'});
            }
        } catch(error) {
            res.status(400).send({status: res.statusCode, typeError: 'CNPJ bad formatted', message: "CNPJ doesn't existis on our database"})
            console.error(error);
        }
    })
});

// Students list
router.get('/students/:key', verifyJWT, (req, res) => {
    const { key } = req.params;
    const selectQuery = `SELECT s.id, s.name, s.email, s.phone, s.traningAmount FROM students AS s JOIN gym AS g ON g.cnpj = s.id_gym WHERE g.id = ? ORDER BY s.name`;
    const authHeader = req.headers['authorization'];

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        database.query(selectQuery, key, (error, result) => {
            if (error) console.error(error);
    
            token
                ? res.send(result)
                : res.status(401).send({status: res.statusCode, typeError: 'Unauthorized', message: 'Token not found'});
        })
    } else {
        res.status(400).send({status: res.statusCode, typeError: 'Bad request', message: 'Authorization header is not present'})
    }
});

// Profile
router.get('/profile/:key', verifyJWT, (req, res) => {
    const { key } = req.params;
    const selectQuery = "SELECT password FROM gym WHERE id = ?";
    const authHeader = req.headers['authorization'];

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        database.query(selectQuery, key, (error, result) => {
            if (error) console.error(error);
    
            const data = result[0];
    
            token
                ? res.send({password: data.password})
                : res.status(401).send({status: res.statusCode, typeError: 'Unauthorized', message: 'Token not found'});
        })
    } else {
        res.status(400).send({status: res.statusCode, typeError: 'Bad request', message: 'Authorization header is not present'})
    } 
})

// Reset Password
router.patch('/reset-password/:key', verifyJWT, (req, res) => {
    const { key } = req.params;
    const { password } = req.body;
    const updateQuery = "UPDATE gym SET password = ? WHERE id = ?";
    const authHeader = req.headers['authorization'];

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        database.query(updateQuery, [password, key], (error, result) => {
            if (error) console.error(error);
    
            token
                ? res.status(201).send({message: 'Updated password'})
                : res.status(401).send({status: res.statusCode, typeError: 'Unauthorized', message: 'Token not found'});
        })
    } else {
        res.status(400).send({status: res.statusCode, typeError: 'Bad request', message: 'Authorization header is not present'})
    }
})

// Logout
const blacklist = [];
router.post('/logout', verifyJWT, (req, res) => {
    const token = req.headers['x-access-token'];
    const authHeader = req.headers['authorization'];

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        
        blacklist.push(token);
        res.send({message: 'Logged out user'});
    }
})

//User
router.get('/user/:key', (req, res) => {
    const {key} = req.params;
    const selectQuery = "SELECT * FROM gym WHERE id = ?";

    database.query(selectQuery, key, (error, result) => {
        if (error) console.error(error);

        const data = result[0];

         res.send(data)
    })
})

//Users
router.get('/users', (req, res) => {
    const selectQuery = "SELECT * FROM gym";

    database.query(selectQuery, (error, result) => {
        if (error) console.error(error);

        res.send(result);
    })
})

module.exports = router;