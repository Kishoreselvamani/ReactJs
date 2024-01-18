const express = require('express');
const routes = express.Router();

routes.get('/Nav', (req,res) => {
    const str =  [{
        "name" : "kishore",
        "msg" : "This message is from the backend",
        "username" : "Kishorekavitha"
    }];
    res.end(JSON.stringify(str));
});

module.exports = routes; 