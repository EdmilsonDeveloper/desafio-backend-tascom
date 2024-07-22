import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";


@Table({
    tableName: 'task',
    freezeTableName: true,
})
export class Task extends Model {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        unique: true,
    })
    taskId: String
    @Column({
        type: DataType.STRING
    })
    title: String
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: true
    })
    status: boolean
    @Column({
        type: DataType.STRING
    })
    description: String
}