import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize'
import { sequelize } from '../database'
export class Fruits extends Model<InferAttributes<Fruits>, InferCreationAttributes<Fruits>> {
    declare id: CreationOptional<number>
    declare name: CreationOptional<string>
    declare image: CreationOptional<string>
}

Fruits.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
        ,
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'Fruits',
        timestamps: false,
    }
)