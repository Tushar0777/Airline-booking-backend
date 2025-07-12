const {Port} =require('./config');
const express=require('express');

const apiroutes=require('./routes');

const app=express();

app.use('/api',apiroutes);



app.listen(Port,()=>{
    console.log(`sucessfully started the server on port ${Port}`)
});