//import express
const express = require('express')
const UserRouter = require('./Routes/UserRoute')

//init express
const app = express()
app.use(express.json())

// const authMiddleWare = (req,res,next)=>{
//     const auth = false;
//     if(auth){
//         next()
//     }
//     else {
//         res.send('You are not authorized!!')
//     }
// }

// app.use(authMiddleWare)


// app.use(express.static(__dirname + '/views'))



// //create EndPoint/RouterHandler 
// app.get('/',/*authMiddleWare,*/ (req,res)=>{
//     //res.send('this is a Home Page')
//     res.sendFile(__dirname+'/views/Home.html')
// })

// app.get('/Profile', (req,res)=>{
//     res.sendFile(__dirname + '/views/Profile.html')
// } )

// app.get('/Css/Home.css', (req,res)=>{
//     res.sendFile(__dirname + '/views/Css/Home.css')
// })

app.use('/api/users',UserRouter )







//listen al port
const PORT = 5000;
app.listen(PORT,err=> err? console.log(err) : console.log(`server is running on ${PORT}...`))