const { DataTypes } = require('sequelize')
const sequelize = require('../utils/connection')

const Message = sequelize.define('message', {
    content:{
        type:DataTypes.STRING,
        allowNull: false
    },
  
    createBy:{
        type:DataTypes.STRING,
        allowNull:false
    },
    //userId
  

});

module.exports = Message;