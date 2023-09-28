const { DataTypes } = require('sequelize')
const sequelize = require('../utils/connection')

const Conversation = sequelize.define('conversation', {
    title:{
        type:DataTypes.STRING,
        allowNull: false
    },
    type:{
        type:DataTypes.STRING,
        allowNull: false,
       
    },
    createBy:{
        type:DataTypes.STRING,
        allowNull:false
    },
    //userId
  

});

module.exports = Conversation;