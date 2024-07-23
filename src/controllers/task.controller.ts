import { NextFunction, Request, Response } from "express";
import { Task } from "../models/task.models";
import { TaskTag } from "../models/taskTag.model";

export const createTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {title, description} = req.body

        const taskCreated = await Task.create({
            title: title,
            description: description
        })

        return res
      .status(201)
      .json({ message: "Task created with success", data: taskCreated });
    } catch (error) {
        console.log(error);
    return res
      .status(500)
      .json({ message: "error at created Task", error: error });
    }
}

export const listTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const taskData = await Task.findAll()

        if (!taskData.length) {
            return res.status(404).json({
              message: "Task not found",
              data: taskData,
            });
          }

          return res.status(200).json({message: 'Task listed Sucessfully', data: taskData})
        
    } catch (error) {
        console.log(error);
    return res
      .status(500)
      .json({ message: "error at created Task", error: error });
    }
}

export const updateTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {title, status, description} = req.body
        const id = req.params.id
        let updatedContent:any = {}

        if (title) {
            updatedContent.title = title
        }

        if(status) {
            updatedContent.status = status
        }

        if (description) {
            updatedContent.description = description
        }

        const updatedTask = await Task.update(
            {...updatedContent},
            {where:{taskId: id}}
        )

        return res.status(201).json({message: "Task updated sucessfully"})
        
    } catch (error) {
        console.log(error);
    return res
      .status(500)
      .json({ message: "error at created Task", error: error });
    }
}

export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id
    
        const deletedTask = await Task.destroy({
            where:{taskId: id}
        })
    
        return res.status(201).json({message: "Task deleted sucessfully"})
        
    } catch (error) {
        console.log(error);
    return res
      .status(500)
      .json({ message: "error at created Task", error: error });
    }

}

export const filteredTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {tagId} = req.body
        const tagExists = await TaskTag.findAll({where:{ tagId: tagId}})

        const taskData = await Task.findAll({where:{taskId: tagExists.taskId}})

        return res.status(200).json({message: 'Task listed Sucessfully', data: taskData})
       
    } catch (error) {
        console.log(error);
    return res
      .status(500)
      .json({ message: "error at created Task", error: error });
    }
    next();
}