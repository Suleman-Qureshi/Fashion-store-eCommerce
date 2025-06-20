import jwt from "jsonwebtoken"
const authenticationToken = (req,res,next )=>{
    const authHeader=req.headers['authencation'];
    const token=authHeader&&authHeader.aplit(' ')[1];
    if(!token) return res.sendStatus(401);
    jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user)=>{
        if(err) return res.sendStatus(403);
        req.user=user;
        next()
    })
}
export default authenticationToken