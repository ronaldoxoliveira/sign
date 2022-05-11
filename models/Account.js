const Sequelize = require("sequelize");
const connection = require("./database");
const Adresse = require("./Adresse");

const Account = connection.define('accounts',{
    name:{
        type: Sequelize.STRING,
        allowNull:false
    },
    birth:{
        type: Sequelize.DATEONLY, 
        allowNull:false 
    },
    cpf:{
        type: Sequelize.STRING(14),
        allowNull:false
    },
    email:{
        type: Sequelize.STRING,
        allowNull:false
    },
    cell_phone:{
        type: Sequelize.STRING(13),
        allowNull:false
    },
    password:{
        type:Sequelize.TEXT,
        allowNull:true
    }
},{
    initialAutoIncrement: 10000, 
  }
);

Adresse.hasMany(Account);
//Account.sync({force:true});

module.exports = Account;