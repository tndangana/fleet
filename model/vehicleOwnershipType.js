const db = require('../config/database');
const seq = require('sequelize');


const VehicleOwnershipType = db.define('vehicle_ownership_type', {

    ownership_type_id: {
        type: seq.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    ownership_type: {
        type: seq.STRING,
        unique: true,
        allowNull: false
    },

  
    created_by: {
        type: seq.INTEGER,
        references: {
            model: 'user',
            key: 'user_id',
        }
    },
    updated_by: {
        type: seq.INTEGER,
        references: {
            model: 'user',
            key: 'user_id',
        }
    }

}, {
    timestamps: true,
    freezeTableName: true
});

module.exports = VehicleOwnershipType;



