const Sequelize = require('sequelize');
const db = require('../config/database');

const Companies = db.define('companies', {
    company_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    company_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
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

module.exports = Companies;




