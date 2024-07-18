var express = require('express');
var router = express.Router();
var usuariosModel = require('../../models/usuariosmodel')

router.get('/', function (req, res, next) {
    res.render('admin/login' , {
        layout:'admin/layout'
    });
});

router.get('/logout', function (req, res, next) {
    req.session.destroy();
    res.render('admin/login' , {
        layout:'admin/layout'
    });
});





module.exports = router;