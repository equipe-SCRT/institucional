const express = require('express');
var router = express.Router();
var email = require('../controller/email');

router.post("/enviar", (req, res) => {
    email.enviar(req,res);
});

module.exports = router;