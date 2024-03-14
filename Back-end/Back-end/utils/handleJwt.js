const jwt = require("jsonwebtoken")

const tokenSign = async (user) => {
    const sign = jwt.sign(
        {
            email: user.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "2h"
        }
    )
    return sign
}

const verifyToken = async (tokenJwt) => {
    try {
        return jwt.verify(tokenJwt, process.env.JWT_SECRET)
    }catch(err) {
        console.log(err)
    }
}

module.exports = { tokenSign, verifyToken }