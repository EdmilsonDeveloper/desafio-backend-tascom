import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    tableName: 'tag',
    freezeTableName: true,
})
export class Tag extends Model {
    @PrimaryKey
    @Column({
        type:DataType.UUID,
        defaultValue: DataType.UUIDV4,
        unique: true,
    })
    tagId:String
    @Column({
        type: DataType.STRING,
        unique: true
    })
    name:String
    @Column({
        type: DataType.STRING
    })
    color:String
}