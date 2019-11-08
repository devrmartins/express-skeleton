import { Model, DataTypes } from 'sequelize';

class User extends Model {
    static init(sequelize) {
        super.init({
            username: DataTypes.STRING,
            password: DataTypes.STRING,
        }, {
            sequelize
        });

        return this;
    }
}

export default User;