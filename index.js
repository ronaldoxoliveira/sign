const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const bcrypt = require('bcryptjs');
require('dotenv').config();
const connection = require("./models/database");
//connection.sync({force:true});

const accountsController = require("./controllers/AccountsControllers");
const contractorsController = require("./controllers/ContractorsControllers");
const agreementsController = require("./controllers/AgreementsControllers");

app.set('view engine','ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/",accountsController);
app.use("/",contractorsController);
app.use("/",agreementsController);


connection.authenticate()
            .then(() => {
                console.log("Conexão feita com banco de dados")
            })
            .catch((msgErro)=>{
                console.log(msgErro);
            });

app.get('/contractor/new/:id?',(req, res)=>{
    let account_id = req.params.id;
    if( account_id ){
        console.log("Valor informado "+account_id);
    }
  /*  Account.findOne({
        where:{id:account_id}
   
    }).then( account => {
        
        if( account != undefined){
            /*Category.create({
                title: title,
                slug: slugify(title)
            }).then(()=>{
                res.redirect("/admin/categories");
            })
            
           res.send("Conta encontrada");
        }else{
            res.send("Conta não encontrada");
        }
    }).catch(erro =>{
        res.send("Falta o codigo de contrato");
    });  
    //res.render('contractor') */
})

app.listen(process.env.PORT,()=>{console.log("App sing run !!!")})