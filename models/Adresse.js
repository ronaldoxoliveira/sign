const Sequelize = require("sequelize");
const connection = require("./database");

const Adresse = connection.define('adresses',{
    cep:{
        type: Sequelize.STRING(8),
        allowNull:false
    },
    district:{
        type: Sequelize.STRING,
        allowNull:false
    },
    city:{
        type: Sequelize.STRING, 
        allowNull:false 
    },
    public_pace:{
        type: Sequelize.STRING,
        allowNull:false
    },
    number:{
        type: Sequelize.STRING,
        allowNull:false
    },
    adjunct:{
        type: Sequelize.STRING,
        allowNull:false
    }
},{
    initialAutoIncrement: 10000, 
  }
);


//Adresse.sync({force:true});

module.exports = Adresse;