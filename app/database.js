const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL,{
    define: {
        timestamps: false,
        underscorded:true
    }
});
module.exports = sequelize;