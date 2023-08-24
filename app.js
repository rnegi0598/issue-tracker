const PORT=5173;
const express = require('express');
const bodyParser=require('body-parser');
const projectRouter=require('./routes/project')
const dbConnect =require('./config/db');
dbConnect();

const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'))

app.use('/',projectRouter);

// set the view engine to ejs
app.set('view engine', 'ejs');


app.listen(PORT,()=>{
    console.log(`server at Port ${PORT} connected `);
})