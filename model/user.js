const Sequelize = require('sequelize');
const db = require('../config/database');


module.exports = db.define('user', {

    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email_address: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    contact: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    user_password: {
        type: Sequelize.STRING,
        allowNull: false,
        
    },

    is_active: {
        type: Sequelize.BOOLEAN
    }


}, {
    timestamps: true,
    freezeTableName: true,
    hooks: {
      beforeCreate: (user,options) => {
       console.log(`tapinda here ..........!!!!!!!`)
      }
  }
      
 
});






