// https://medium.com/@sunnykay/docker-development-workflow-node-express-mongo-4bb3b1f7eb1e

var express = require('express');
var app = express();

app.get('/', (req, res) => {
   res.send('hey, test passed!')
});

app.listen(3000, () => {
    console.log('example app is running on port 3000')
})