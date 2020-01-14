import { Model, DataTypes } from 'sequelize'
import sequelize from '../../config/database'

class User extends Model {}

User.init(
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'users',
        sequelize
    }
)

export default User
