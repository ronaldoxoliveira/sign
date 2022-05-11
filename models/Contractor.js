const Sequelize = require("sequelize");
const connection = require("./database");
const Agreement = require('./Agreement');
const Adresse = require('./Adresse');
const { AccessDeniedError } = require("sequelize");

const Contractor = connection.define('contracts',{
    name:{
        type: Sequelize.STRING,
        allowNull:false
    },
    birth:{
        type: Sequelize.DATEONLY, 
        allowNull:false 
    },
    birth_place:{
        type: Sequelize.STRING, 
        allowNull:false 
    },
    cpf:{
        type: Sequelize.STRING(14),
        allowNull:false
    },
    rg_number:{
        type: Sequelize.STRING(14),
        allowNull:false
    },
    rg_organ:{
        type: Sequelize.STRING,
        allowNull:false
    },
    rg_uf:{
        type: Sequelize.CHAR(2),
        allowNull:false
    },
    email:{
        type: Sequelize.STRING,
        allowNull:false
    },
    cell_phone:{
        type: Sequelize.STRING(13),
        allowNull:false
    }
},{
    initialAutoIncrement: 10000, 
  }
);

Adresse.hasMany(Contractor);
//Contractor.sync({force:true});
module.exports = Contractor;