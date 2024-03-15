const{verify} =require('jsonwebtoken')

const Auth=(req)=>{
    const authorization = req.headers.cookie;
    if(!authorization) return false;
    const token= authorization.split('=')[1];
    const {userToken}=verify(token,'kalungi2002',{ignoreExpiration:true});
    return userToken; 
}
const Admin=(req)=>{
    const authorization = req.cookies;
    if(!authorization) return false;
    const token= authorization.split(' ')[1];
    const {userToken}=verify(token,process.env.ACCESS_TOKEN,{ignoreExpiration:true});
    return userToken;
}
module.exports={
    Auth,Admin
}