const express = require('express');
const { default: slugify } = require('slugify');
const router = express.Router();
const { redirect } = require('express/lib/response');
const res = require('express/lib/response');
const Account = require("../models/Account");
const Agreement = require("../models/Agreement");
const Contractor = require("../models/Contractor");

//const adminAuth = require('../middlewares/adminAuth');

router.get('/admin/account/',(req, res)=>{
   
    res.send("<h1>ÁREA RESTRITA PARA CONTADOR</h1>");
    /* Article.findAll({
        include:[{model:Category}]
    }).then(articles =>{
        console.log(articles);
        res.render("admin/articles/index",{articles:articles});
    })
    */ 
});


module.exports = router;