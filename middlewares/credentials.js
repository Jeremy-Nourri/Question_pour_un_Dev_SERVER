const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if (origin === process.env.FRONT_URL) {
        res.header('Access-Control-Allow-Credentials', true);
    }
    next();
}

module.exports = credentials