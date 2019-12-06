const Sequelize = require('sequelize');
const db = require('../config/database');


const Vehicles = db.define('vehicles', {
    vehicle_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    license_plate: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true

    },

    odometer_value: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue:0.0
    },

    vehicle_make_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'vehicle_make',
            key: 'make_id'
        }
    },

    vehicle_model_id: {
        type: Sequelize.INTEGER,
        references: {
            model:'vehicle_models',
            key: 'vehicle_model_id'
        }
    },

    vehicle_model_year: {
        type: Sequelize.STRING
    },

    vehicle_ownership_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'vehicle_ownership_type',
            key: 'ownership_type_id'
        }
    },

    fuel_type_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'fuel_types',
            key: 'fuel_type_id'
        }
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
module.exports = Vehicles;





