require('dotenv/config');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

// Check if token exists
function verifyJWT(req, res, next) {
    const authHeader = req.headers['authorization'];

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, SECRET, (err, decoded) => {
            req.userId = decoded.userId;
            next();
        });
    } else {
        res.status(401).send({isAuthenticated: false, status: 'User unauthorized'})
    }
}

module.exports = {
    verifyJWT,
    SECRET
}