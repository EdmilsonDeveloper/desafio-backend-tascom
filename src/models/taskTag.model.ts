import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Task } from "./task.models";
import { Tag } from "./tag.models";

@Table({
    tableName: "taskTag",
    freezeTableName: true
})
export class TaskTag extends Model {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        unique: true
    })
    id : String
    @Column({
        type: DataType.UUID,
        references: {
            model: Task,
            key: "taskId"
        },
        onDelete: 'CASCADE'
    })
    taskId: String
    @Column({
        type: DataType.UUID,
        references: {
            model: Tag,
            key: "tagId"
        },
        onDelete: 'CASCADE'
    })
    tagId: String
}