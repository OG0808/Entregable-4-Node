const { DataTypes } = require('sequelize')
const sequelize = require('../utils/connection')

const User = sequelize.define('user', {
    username:{
        type:DataTypes.STRING,
        allowNull: false
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    firstname:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    lastname:{
        type:DataTypes.STRING,
        allowNull: false,
        
    }

});

User.prototype.toJSON = function () {
    const values = { ...this.get() };
    delete values.password;
    return values;
}


module.exports = User;