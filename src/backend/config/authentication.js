require('dotenv/config');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

// Check if token exists
function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'];
    
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) return res.status(401).send({error: 'Token not found. Unauthorized.'})

        req.userId = decoded.userId;
        next();
    });
}

module.exports = {
    verifyJWT,
    SECRET
}