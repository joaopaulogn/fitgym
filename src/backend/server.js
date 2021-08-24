const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();
const PORT = 3001;

// Settings
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Default routes
app.use('/', routes);

// When not find route
app.use((req, res, next) => {
    const error = new Error('Route not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res) => {
    console.error(err.stack);
    res.type('text/plain');
    res.status(error.status || 500);
    return res.send({
        error: `${error.status} Internal server error`
    })
})

// Tell app to listen port 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});