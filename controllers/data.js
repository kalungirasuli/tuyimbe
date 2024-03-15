
const images=require('../models/images')
const videos=require('../models/videoShema')

module.exports = {
    get:async(req,res)=>{
        try{
            const imagedata=await images.find()
            const videodata=await videos.find()
            const data=imagedata
            res.render('learn',{data,videodata})
            console.log(data)
        }catch(err){
            res.send('internal server error')
        }
    }
}