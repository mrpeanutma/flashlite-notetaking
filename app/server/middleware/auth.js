require ('dotenv').config();
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (!token) {return res.status(401).json({msg: "No token, access denied"});}

        // Expecting "Bearer [token]"
        const token2 = token.split(" ")[1];
        if(!token2) {return res.status(401).json({msg: "No token after Bearer, access denied"});}
        console.log(process.env.JWT_SECRET);
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified) {return res.status(401).json({msg: "Token verification failed, authorization denied"});}

        req.user = verified.id;
        next();
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

module.exports = auth;