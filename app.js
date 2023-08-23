const PORT=5000;
const express = require('express');



const app=express();


app.use('/',);

// set the view engine to ejs
app.set('view engine', 'ejs');


app.listen(PORT,()=>{
    console.log(`server at Port ${PORT} connected `);
})