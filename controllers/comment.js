const VideoContent=require('../models/comments')
const User= require('../models/userModel')
const express=require('express')
const {Auth}= require('../Auth')
module.exports={
    post:async(req,res)=>{
        try{
            const user= Auth(req)
            if(!user) return res.status(404).redirect('/login')
            const checkUser= await User.findById({_id:user})
            if(!checkUser) return res.status(404).redirect('/login')
            const data={
                comment:req.body.comment,
                id:req.body.id,
                email:checkUser.email
            }
            console.log(data)
            const message= await new VideoContent({...data})
            await message.save()
            res.status(200).redirect('/learn')
        }catch(err){
            console.log(err)
            res.status(500).send('error occured internally')
        }
    },
    get:async(req,res)=>{
        try{
            const comment= await VideoContent.find()
            res.status(200).render('comment',{comment})

        }catch(err){
            console.log(err)
            res.status(500).send('server error, failed to get data')
        }
    }
   
}