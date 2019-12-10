const Seq = require('sequelize');
const db = require('../config/database');

module.exports =  db.define('vehicle_type', {

    vehicle_type_id: {
        type: Seq.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    vehicle_type: {
        type: Seq.STRING,
        unique:true

    }
    , created_by: {
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

