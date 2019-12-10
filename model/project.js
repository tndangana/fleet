const Sequelize = require('sequelize');
const db = require('../config/database');

module.exports =  db.define('projects', {
    project_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    project: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    department_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'departments',
            key: 'department_id'
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
