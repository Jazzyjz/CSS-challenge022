const PORT = process.env.PORT || 5000;
const path = require('path');

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/home.html'));
});

app.get('/work',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/work.html'));
})

app.get('/uxui',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/uxui.html'));
});
app.get('/request',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/request.html'));
});

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})