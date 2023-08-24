const PORT=5173;
const express = require('express');
const projectRouter=require('./routes/project')


const app=express();

app.use(express.static('public'))

app.use('/',projectRouter);

// set the view engine to ejs
app.set('view engine', 'ejs');


app.listen(PORT,()=>{
    console.log(`server at Port ${PORT} connected `);
})