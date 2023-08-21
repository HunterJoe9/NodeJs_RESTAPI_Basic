const express = require("express"); //import 기능 대신 common js 문법

const app = express();

const port = 3010;

app.get('/', (req,res) => {
    res.send("Hello, Express!");
});

app.post('/', (req,res) => {
    res.send("This is Post Request");
});

app.put('/', (req,res) => {
    res.send("This is Put Request");
});

app.delete('/', (req, res) => {
    res.send("This is Delete Request");
});

app.listen(port, () => {
    console.log(`Server listening on port : ${port}!!`);
});



