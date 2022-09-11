let express = require('express');
let app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
    res.sendFile(__dirname + '/public/style.css');
})
























 module.exports = app;
