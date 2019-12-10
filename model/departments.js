const Seq = require('sequelize');
const db = require('../config/database');



module.exports = db.define('departments', {

    department_id: {
        type: Seq.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    department: {
        type: Seq.STRING,
        allowNull: false,
        unique: true
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


