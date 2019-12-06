const Seq = require('sequelize');
const db = require('../config/database');

const FuelRequestPayments = db.define('fuel_request_payment', {
    payment_id: {
        type: Seq.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    amount_paid: {
        type: Seq.DECIMAL(13, 2),
        allowNull: false
    },
    fuel_request_id: {
        type: Seq.INTEGER,
        references: {
            model: 'fuel_requests',
            key: 'fuel_request_id',
        }
    },
    paid_by: {
        type: Seq.INTEGER,
        references: {
            model: 'user',
            key: 'user_id',
        }

    }, created_by: {
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

module.exports = FuelRequestPayments;


