
const images=require('../models/images')
const videos=require('../models/videoShema')

module.exports = {
    get:async(req,res)=>{
        try{
            const imagedata=await images.find()
            const videodata=await videos.find()
            const data=imagedata
            res.render('learn',{data,videodata})
           
        }catch(err){
            console.error(err)
            res.send('internal server error')
        }
    },
    feature:async(req,res)=>{
        try{
            const imagedata=await images.find({category:"features"})
            const image=imagedata
            res.render('feature',{image})
           
        }catch(err){
            console.error(err)
            res.send('internal server error')
        }
    },
    dom:async(req,res)=>{
        try{
            const imagedata=await images.find({category:"domestic"})
            const image=imagedata
            res.render('domestic',{image})
          
        }catch(err){
            console.error(err)
            res.send('internal server error')
        }
    },
    body:async(req,res)=>{
        try{
            const imagedata=await images.find({category:"bodyparts"})
            const image=imagedata
            res.render('body',{image})
           
        }catch(err){
            console.error(err)
            res.send('internal server error')
        }
    },
    discover:async(req,res)=>{
        try{
            res.render('discover')
           
        }catch(err){
            console.error(err)
            res.send('internal server error')
        }
    },
    forum:async(req,res)=>{
        try{
            res.render('forum')
           
        }catch(err){
            console.error(err)
            res.send('internal server error')
        }
    },
    room:async(req,res)=>{
        try{
            res.render('room')
           
        }catch(err){
            console.error(err)
            res.send('internal server error')
        }
    }
}