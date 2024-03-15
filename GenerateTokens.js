const {sign}=require('jsonwebtoken');
const {Auth}=require('./Auth')
const User =require('./models/userModel')
const Admin=require('./models/adminProfileModel')
const Accessoken= (userToken)=>{
    return sign({userToken},'kalungi2002',{expiresIn:1000*60*60*24*7})
}

//send the access token and refresh token to the client
 const sendAccessToken=async(res,ACCESS_TOKEN)=>{
   
        res.cookie('access_token',ACCESS_TOKEN ,{
             HttpOnly:true,
            Path:"/access_token" 
        } )
    
}

const auth=async(req,res,next)=>{
    const user=Auth(req)
    if(!user) return res.status(400).redirect('/login')
    const checkUser = await User.findById({_id:user})
    if(!checkUser) return res.status(400).redirect('/login')
    next()
}
const Adminauth=async(req,res,next)=>{
    const user=Auth(req)
    if(!user) return res.status(400).redirect('/login')
    const checkUser = await Admin.findById({_id:user})
    if(!checkUser) return res.status(400).redirect('login')
    next()
}
module.exports={Accessoken,sendAccessToken ,auth,Adminauth}