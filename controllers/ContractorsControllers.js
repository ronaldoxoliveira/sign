const express = require('express');
const { default: slugify } = require('slugify');
const router = express.Router();
const { redirect } = require('express/lib/response');
const res = require('express/lib/response');
const validator = require('validator');
const Account = require("../models/Account");
const Contractor = require("../models/Contractor");
const Agreement = require("../models/Agreement");
const Adresse = require("../models/Adresse");
const AgreementContractor = require("../models/AgreementContractor");
//const adminAuth = require('../middlewares/adminAuth');

router.get('/contractor/new/:id?',(req, res)=>{
    let id = req.params.id;
    Agreement.findByPk(id).then(agreement =>{
        res.render('contractorsign',{agreement});
    }).catch(err => {
        console.log("Falha na consulta:"+err);
        res.send("Falha na consulta: "+err)
    })

})

var checkForm = function(req, res, next){

    let msg = new Array();
    if(! validator.isLength(req.body.name,{min:5}) ){
        msg.push("Informe o nome completo. Ex: Edson Arantes do Nascimento.");
    }

    if( validator.isDate(req.body.birth,{format:'DD/MM/YYYY'}) && validator.isLength(req.body.birth,{min:10,max:10}) ){
        msg.push("Data de Nascimento incorreta.");
    }

    if(! validator.isLength(req.body.birth_place,{min:5}) ){
        msg.push("Informe local de registro de nascimento. Ex: Petrolina - PE");
    }

    if(! validator.isLength(req.body.cpf,{min:11, max:11}) ){
        msg.push("Informe o CPF sem ponto e traço. Ex: 99999999999. São 11 dígitos");
    }

    if(! validator.isLength(req.body.rg_number,{min:4}) ){
        msg.push("Informe o número do RG.");
    }

    if(! validator.isLength(req.body.rg_organ,{min:3}) ){
        msg.push("Informe o orgão emissor do RG. Ex: SSP/SP ");
    }

    if(! validator.isEmail(req.body.email) ){
        msg.push("Informe o orgão emissor do RG. Ex: SSP/SP ");
    }
    
    if( msg.length > 0)
    {
       res.render('notificador',{msg})
    }else{
        next();
    }
    
}


router.post('/contractor/sign',checkForm, (req, res)=>{
    let {name, birth, birth_place, cpf,rg_number, rg_organ ,rg_uf, email, cell_phone, cep, district, city, uf, public_pace, number, adjunct, agreementId, title, context, contractorSign } = req.body;

   const adresse = Adresse.create({
        cep: cep,
        district: district,
        city: city,
        public_pace: public_pace,
        number: number,
        adjunct: adjunct
    }).then( adresse => {
            const contractor = Contractor.create({
                name: name,
                birth: birth,
                birth_place: birth_place,
                cpf: cpf,
                rg_number: rg_number,
                rg_organ: rg_organ,
                rg_uf: rg_uf,
                email: email,
                cell_phone: cell_phone,
                adresseId: adresse.id
            }).then(contractor => {
                const agreementContractor = AgreementContractor.create({
                    agreementId: agreementId,
                    contractorId: contractor.id,
                    title: title,
                    context: context,
                    contractorSign: contractorSign
                }).then(agreementContractor => {
                    res.render("printcontract",{agreementContractor,contractor, adresse});
                });
            });
        })
})


module.exports = router;