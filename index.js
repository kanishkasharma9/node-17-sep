const express = require('express');
const connect = require('./connection');
const student = require('./routes/student');
const app = express();
connect();
app.use(express.json());
app.use(student);
console.log("thanls")
app.listen(300, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("server is running on 3000");
    }
});