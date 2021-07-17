const express = require('express');
const database = require('./config/database');
const cors = require('cors');

const app = express();
const PORT = 3001;
app.use(cors());
app.use(express.json());

// Route to get all login
app.get('/login/get', (req, res) => {
    database.query("SELECT * FROM login", (err, result) => {
        if (err)  console.log(err);

        res.send(result);
    });
});

// Route to get one login
app.get('/login/get/:key', (req, res) => {
    const key = req.params.key;
    const selectQuery = "SELECT * FROM login WHERE email = ?";

    database.query(selectQuery, key, (err, result) => {
        if (err)  console.log(err);

        res.send(result);
    });
});

// Route for creating the login
app.post('/login/post', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const insertQuery = "INSERT INTO login (email, password) VALUES (?,?)";
    const values = [email, password];

    database.query(insertQuery, values, (err, result) => {
        if (err)  console.error(err);

       console.log(result);
    });
});

// Route to update a email login
app.put('/login/update/:key', (req, res) => {
    const key = req.params.key;
    const email = req.body.email;
    const password = req.body.password;
    const updateQuery = "UPDATE login SET email = ?, password = ? WHERE email = ?";
    const values = [email, password, key];

    database.query(updateQuery, values, (err, result) => {
        if (err) console.log(err);

        console.log(result);
    });
});

// Route to delete a login
app.delete('/login/delete/:key', (req, res) => {
    const key = req.params.key;
    const deleteQuery = "DELETE FROM login WHERE email = ?";

    database.query(deleteQuery, key, (err, result) => {
        if (err) console.log(err);
    });
});

// ---------- REGISTER ----------

// Route to get all register
app.get('/register/get', (req, res) => {
    database.query("SELECT * FROM register", (err, result) => {
        if (err)  console.log(err);

        res.send(result);
    });
});

// Route to get one register
app.get('/register/get/:key', (req, res) => {
    const key = req.params.key;
    const selectQuery = "SELECT * FROM register WHERE email = ?";

    database.query(selectQuery, key, (err, result) => {
        if (err)  console.log(err);

        res.send(result);
    });
});

// Route for creating the register
app.post('/register/post', (req, res) => {
    const gymName = req.body.gymName;
    const email = req.body.email;
    const password = req.body.password;
    const insertQuery = "INSERT INTO register (gymName, email, password) VALUES (?,?,?)";
    const values = [gymName, email, password];

    database.query(insertQuery, values, (err, result) => {
        if (err)  console.error(err);

       console.log(result);
    });
});

// Route to update a register
app.put('/register/update/:key', (req, res) => {
    const key = req.params.key;
    const gymName = req.body.gymName;
    const email = req.body.email;
    const password = req.body.password;

    const updateQuery = "UPDATE register SET gymName = ?, email = ?, password = ? WHERE email = ?";
    const values = [gymName, email, password, key]

    database.query(updateQuery, values, (err, result) => {
        if (err) console.log(err);

        console.log(result.affectedRows);
    });
});

// Route to delete a register
app.delete('/register/delete/:key', (req, res) => {
    const key = req.params.key;
    const deleteQuery = "DELETE FROM register WHERE email = ?";

    database.query(deleteQuery, key, (err, result) => {
        if (err) console.log(err);

        console.log(result.affectedRows);
    });
});

// Tell app to listen port 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});