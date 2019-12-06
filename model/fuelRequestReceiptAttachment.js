const Seq = require('sequelize');
const db = require('../config/database');


const FuelRequestReceiptAttachment = db.define('fuel_request_receipt_attachment', {

    attachment_id: {
        type: Seq.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    attachment_path: {
        type: Seq.STRING,
        allowNull:false
    },
    fuel_request_id: {
        type: Seq.INTEGER,
        reference: {
            model: 'fuel_requests',
            key: 'fuel_request_id',
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
    timestamps: true,
    freezeTableName: true
});

module.exports = FuelRequestReceiptAttachment;

