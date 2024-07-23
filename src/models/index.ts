import { Tag } from "./tag.models";
import { Task } from "./task.models";
import { TaskTag } from "./taskTag.model";

export const taskTag = Task.belongsToMany(Tag, {through: TaskTag})
export const tagTask = Tag.belongsToMany(Task, {through: TaskTag})