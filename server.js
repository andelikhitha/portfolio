const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

/* MYSQL CONNECTION */

const db = mysql.createConnection({

    host: process.env.DB_HOST,

    user: process.env.DB_USER,

    password: process.env.DB_PASSWORD,

    database: process.env.DB_NAME

});

/* CONNECT DATABASE */

db.connect((err) => {

    if(err){

        console.log("Database Connection Failed");
        console.log(err);

    }

    else{

        console.log("Connected to MySQL Database");
    }
});

/* HOME ROUTE */

app.get("/", (req, res) => {

    res.send("Portfolio Backend Running");

});

/* CONTACT API */

app.post("/contact", (req, res) => {

    const {name, email, message} = req.body;

    const sql =
    "INSERT INTO contacts(name,email,message) VALUES(?,?,?)";

    db.query(
        sql,
        [name, email, message],

        (err, result) => {

            if(err){

                console.log(err);

                res.send("Error");

            }

            else{

                res.send("Message Stored Successfully");
            }
        }
    );

});

/* SERVER */

app.listen(5000, () => {

    console.log("Server running on port 5000");

});