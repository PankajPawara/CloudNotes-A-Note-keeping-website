const jwt = require('jsonwebtoken');
//Usually keep this in .env file
const JWT_SECRET = "itsmebaby";

const fetchuser=(req,res,next)=>{
    // Get user from the JWT token and add it to req obj.
    const token=req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Please authenticate using valid token"});
    }
    try {
        const data=jwt.verify(token,JWT_SECRET);
        req.user=data.user;
        next();
    } catch (error) {
        res.status(401).send({error:"Please authenticate using valid token"});
    }
}
module.exports=fetchuser;