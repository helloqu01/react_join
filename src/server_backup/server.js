const express = require('express');
const app = express();
const PORT = 3001;

const cors = require('cors');
app.use(cors());



var mysql = require('mysql');
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '0000',
    database : 'react_test'
});
 

app.get('/api/get', (req, res) => {
   const sqlInsert = "SELECT * FROM test ;"
   db.query(sqlInsert, (err, result) => {
       res.send(result);
   })
})


app.use(express.json())

const bcrypt = require('bcrypt');

app.post("/api/join", function (request, response) {
    console.log(request.body.data.name);
    const Name = request.body.data.name;
    const PW = request.body.data.password;
    const salt = 12;
    const Password =  bcrypt.hashSync(PW, salt);
    const Email = request.body.data.email;
    const sqlInsert = "insert into  test ( name, password, email) values ( '"+ Name + "', '"+ Password + "', '"+ Email + "');"
    console.log(sqlInsert);
            db.query(sqlInsert, (err, result) => {
            response.send(result);
            console.log(result);
        })
});


app.post("/api/login", function (request, response) {
    const Name = request.body.data.name;

    const sqlInsert = "SELECT * FROM test where Name = '"+Name+"';"
    console.log(sqlInsert);
            db.query(sqlInsert, async (err, result) => {
                const hash = result[0].password
                const match = await  bcrypt.compare(request.body.data.password , hash)
                if(match) {
                    console.log("match");
                    response.send(result);
                }else{
                    console.log("no match");
                    response.send(err);
                }
            
           
        })

   
   


    
});



app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})