const bodyParser = require('body-parser');
const express = require('express');
const routerhandler = require('./routes/handler.js');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routerhandler);

const PORT = 4000;

app.listen(PORT,() => {
    console.log(`the port is connected ${PORT}`);
})
