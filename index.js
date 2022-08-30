const express = require('express');

const app = express();
let port = 3000;
app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(port, 'localhost', (req, res) => {
    console.log("Server is running on port"+port);
})