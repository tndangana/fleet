const Sequelize = require('sequelize');
const db = require('../config/database');


module.exports =  db.define('vehicle_make', {

    make_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    vehicle_make: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    vehicle_make_logo_path: {
        type: Sequelize.STRING
    },
    created_by: {
        type: Sequelize.INTEGER,
        references: {
            model: 'user',
            key: 'user_id',
        }
    },
    updated_by: {
        type: Sequelize.INTEGER,
        references: {
            model: 'user',
            key: 'user_id',
        }
    }

}, {
    timestamps: true,
    freezeTableName: true
});

