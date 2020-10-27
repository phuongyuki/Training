var express = require('express');
var router = express.Router();

router.get('/index.html', (req,res) =>{
        res.render('index.njk')
});

router.get('/category.html', (req,res) =>{
    res.render('category.njk')
});
router.get('/contact.html', (req,res) =>{
    res.render('contact.njk')
});
router.get('/login.html', (req,res) =>{
    res.render('login.njk')
});
router.get('/register.html', (req,res) =>{
    res.render('register.njk')
});

router.get('/sedan.html', (req, res) =>{
    res.render('sedan.njk')
});

router.get('/data.html', (req, res) =>{
    res.render('data.njk')
});

module.exports = router;