const db = require('../config/database');
const Seq = require('sequelize');


module.exports =  db.define('vehicle_models',{
 
    vehicle_model_id:{
        type: Seq.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    model_name:{
        type:Seq.STRING,
        allowNull: false,
    },
    make_id:{
        type:Seq.INTEGER,
        references:{
            model:'vehicle_make',
            key:'make_id'
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
