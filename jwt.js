const jwt=require("jsonwebtoken")
const dotenv = require('dotenv');
dotenv.config();
const SECRET_KEY="Nilesh"

function createToken(data, expiresIn){
    const token = jwt.sign(data, SECRET_KEY, { expiresIn });
    return token

}

function verifyToken(token) {
    try {
        const tokenData = jwt.verify(token, SECRET_KEY);
        return tokenData;
    } catch (err) {
        console.log(err);
        return null;
    }
}
module.exports={
    createToken,
    verifyToken
};