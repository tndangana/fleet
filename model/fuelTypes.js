const Seq = require('sequelize');
const db = require('../config/database');

module.exports = db.define('fuel_types', {
   
    fuel_type_id: {
        type: Seq.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    fuel_type: {
        type: Seq.STRING,
         allowNull: false,
    },
    created_by: {
        type: Seq.INTEGER,
        references: {
            model: 'user',
            key: 'user_id',
        }
    },
    updated_by: {
        type: Seq.INTEGER,
        references: {
            model: 'user',
            key: 'user_id',
        }
    }

}, {
    timestamps: true,
    freezeTableName: true
});


