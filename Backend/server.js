const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const cors = require('cors');
const bcrypt = require('bcrypt');


// Enable CORS
server.use(cors());

 
server.use(bodyParser.json())
 
// Server Listening
server.listen(3000, () => {
    console.log('Server is running at port 3000');
});

// Database Connection

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password : "root",
    database: "users"
})

db.connect((error)=> {
    if(error){
        console.log("Error connecting to DB" + error)
    }else{
        console.log("Successfully conneced to the DB")
    }
})



server.get("/api/user", (req, res)=>{
    var sql = "SELECT * FROM usersInfo";
    db.query(sql, (error, result)=>{
        if (error){
            console.log("Error connecting to DB")
        }else{
            res.json(result);
        }
    })
})

server.post("/api/user", (req,res)=>{
    const userData = req.body;
    var sql = "SELECT * FROM usersInfo WHERE username='"+userData.username+"'";
    db.query(sql, (error, result)=>{
        if (error){
            console.log("Error connecting to DB")
        }else{
            if(Object.keys(result).length===0){
                res.send({message:string="Username not found!"})
            }else{
            bcrypt.compare(userData.upass,result[0].upass, (err, r) => {
                if (err) {
                  console.error(err);
                } else if (r) {
                  res.send({message:string= ""})
                } else {
                  res.send({message:string= "Password is Incorrect. Please try again."})
                }
            }
            )
        }
    }
}
    )
}
)







