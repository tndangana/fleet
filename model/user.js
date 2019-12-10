const Sequelize = require('sequelize');
const db = require('../config/database');
const bcrypt = require("bcrypt");


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
        allowNull: false
    },

    is_active: {
        type: Sequelize.BOOLEAN
    }


}, {
    timestamps: true,
    freezeTableName: true,
    
        hooks: {
          beforeCreate: (user) => {
            const salt = bcrypt.genSaltSync();
            user.password = bcrypt.hashSync(user.password, salt);
          }
        },
        instanceMethods: {
          validPassword: function(password) {
            return bcrypt.compareSync(password, this.password);
          }
        }
       
});






