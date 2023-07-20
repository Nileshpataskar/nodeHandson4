const jwt = require('jsonwebtoken');
const SECRET_KEY=process.env.SECRET_KEY;

const authorization=(req,res,next)=>{
    const token=req.headers["authorization"]
    if(token==null) {
    return res.send({mes: "user not authoried"})

    }

    const validate=jwt.verify(token,process.env.SECRET_KEY)
    if(!validate){
        return res.status(401).send({mes:"unauthorized person"})
    }
    next()
}
module.exports =authorization;