const express = require ('express');

const path = require ('path');

const app = express();

const port = 5000;

app.get("",(req,res)=>{

    res.send("Server");

})
app.get("/random",(req,res)=>{
    res.sendFile(path.join(__dirname+ '/random.html'));

})

app.listen(port,()=>{

    console.log(`Server is running on port ${port}`)

})

