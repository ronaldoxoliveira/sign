const Sequelize = require("sequelize");
const connection = require("./database");
const Account = require("./Account");
const Contractor = require("./Contractor");


const Agreement = connection.define('agreements',{
    title:{
        type: Sequelize.STRING,
        allowNull:false
    },
    context:{
        type: Sequelize.TEXT, 
        allowNull:false 
    },
},{
    initialAutoIncrement: 10000, 
  }
);

Account.hasMany(Agreement);
Agreement.belongsTo(Account,{foreignKey: {name: 'accountId', allowNull: false} });

//Agreement.sync({force:true});

module.exports = Agreement;