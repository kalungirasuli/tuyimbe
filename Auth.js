const{verify} =require('jsonwebtoken')
function getCookieByName(cookieName,request) {
    const cookies = request.headers.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split('=');
        if (cookie[0] === cookieName) {
            return cookie[1];
        }
    }
    return null; // Return null if the cookie with the given name is not found
}
const Auth=(req)=>{
    const authorization =getCookieByName('access_token',req)
    if(!authorization) return false;
    const {userToken}=verify(authorization,'kalungi2002',{ignoreExpiration:true});
    return userToken; 
}
const Admin=(req)=>{
    const authorization =getCookieByName('access_token',req)
    if(!authorization) return false;
    const {userToken}=verify(authorization,"kaungi2002",{ignoreExpiration:true});
    return userToken;
}
module.exports={
    Auth,Admin
}