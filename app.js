const express = require("express");
const app = express();
const path=require("path");

const port = 8000;

app.use(express.static(path.join(__dirname, "views")));

 
app.get("/home", function(req, res){ 
    console.log(req.url);
    console.log(path.join(__dirname,"views","index.html"))
    res.status(200).sendFile(path.join(__dirname,"/views","index.html"));
   
});
 
app.get("/about",(req, res)=>{ 
    console.log(req.url);
    res.status(200).sendFile(path.join(__dirname,"views","about.html"));
   
});
app.get("/contacts",(req, res)=>{ 
    console.log(req.url);
    res.status(200).sendFile(path.join(__dirname,"views","contacts.html"));
   
});
app.get("/btn",(req, res)=>{ 
    console.log(req.url);
    res.status(200).sendFile(path.join(__dirname,"views","btn.html"));
   
});





app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
