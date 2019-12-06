const Seq = require('sequelize');
const db = require('../config/database');


const FuelRequests = db.define('fuel_requests', {

    fuel_request_id: {
        type: Seq.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    department_id: {
        type: Seq.INTEGER,
        references: {
            model: 'departments',
            key: 'department_id'
        }
    },
    project_id: {
        type: Seq.INTEGER,
        references: {
            model: 'projects',
            key: 'project_id'
        }
    },
    vehicle_id: {
        type: Seq.INTEGER,
        references: {
            model: 'vehicles',
            key: 'vehicle_id'
        }
    },
    paybill_number: {
        type: Seq.INTEGER,
        allowNull: false,
    },
    driver_id: {
        type: Seq.INTEGER,
        references: {
            model: 'drivers',
            key: 'driver_id'
        }
    },
    current_odometer: {
        type: Seq.DOUBLE,
        allowNull: false,
    },
    fuel_vendor: {
        type: Seq.STRING,
        allowNull: false,
    },

    fuel_quantity: {
        type: Seq.DOUBLE,
        allowNull: false,
    },

    price_per_quantity: {
        type: Seq.DECIMAL(13, 2),
        allowNull: false,
    },

    is_approved: {
        type: Seq.BOOLEAN,
        defaultValue: false
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

module.exports = FuelRequests;


