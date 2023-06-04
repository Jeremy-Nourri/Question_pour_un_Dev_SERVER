const jwt = require('jsonwebtoken');

const authToken = (req, res, next) => {

    const cookie = req.cookies;
    const accessToken = cookie.accessToken;
    console.log(accessToken);

    if (!accessToken) {
        return res.status(401).json("No token, authorization denied");
    }

    jwt.verify(accessToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json("Token is not valid");
        } else {
            req.user = decoded.id;
            next();
        }
    }
    );
};

module.exports = authToken;