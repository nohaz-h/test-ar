const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 5000;

var key = fs.readFileSync(__dirname + '/certs/selfsigned.key');
var cert = fs.readFileSync(__dirname + '/certs/selfsigned.crt');
var options = {
  key: key,
  cert: cert
};

app = express()
app.set("/", "html");
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
   res.render('index');
});

var server = https.createServer(options, app);

server.listen(PORT, () => {
  console.log("server starting on port : " + PORT)
});
