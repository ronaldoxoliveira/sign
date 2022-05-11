const Sequelize = require("sequelize");
const { INTEGER } = require("sequelize");
const connection = require("./database");
const Agreement = require("./Agreement");
const Contractor = require("./Contractor");


const AgreemmentContrator = connection.define('agreements_has_contractors',{
    agreementId:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    contractorId:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title:{
        type: Sequelize.STRING,
        allowNull:false
    },
    context:{
        type: Sequelize.TEXT, 
        allowNull:false 
    },
    contractorSign:{
        type: Sequelize.TEXT,
        allowNull:false
    }
},{
    initialAutoIncrement: 10000, 
  }
);

AgreemmentContrator.belongsTo(Agreement, { foreignKey: 'agreementId' });
AgreemmentContrator.belongsTo(Contractor, { foreignKey: 'contractorId' });
//AgreemmentContrator.sync({force:true});
module.exports = AgreemmentContrator;