const Seq = require('sequelize');
const db = require('../config/database');


module.exports = db.define('drivers', {

    driver_id: {
        type: Seq.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    vehicle_id: {
        type: Seq.INTEGER,
        references: {
            model: 'vehicles',
            key: 'vehicle_id',
        }
    },

    company_id: {
        type: Seq.INTEGER,
        references: {
            model: 'companies',
            key: 'company_id',
        }
    },

    user_id: {
        type: Seq.INTEGER,
        references: {
            model: 'user',
            key: 'user_id',
        }
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
    timestamp: true,
    freezeTableName: true
});



