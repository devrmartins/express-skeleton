import { Sequelize } from 'sequelize'

const database = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    define: {
        timestamps: true,
        underscored: true
    }
})

export default database
