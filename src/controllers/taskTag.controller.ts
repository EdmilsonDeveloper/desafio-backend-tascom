import { NextFunction, Request, Response } from "express";
import { TaskTag } from "../models/taskTag.model"

export const createTaskTag = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {taskId, tagId} = req.body

        const taskTagCreated = await TaskTag.create({
            taskId: taskId,
            tagId: tagId
        })

        return res
        .status(201)
        .json({ message: "Association created with success", data: taskTagCreated });
        
    } catch (error) {
        console.log(error);
    return res
      .status(500)
      .json({ message: "error at created TaskTag", error: error });
    }
}

export const listTaskTag = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const taskTagData = await TaskTag.findAll()
    
        if (!taskTagData.length) {
            return res.status(404).json({
              message: "Association not found",
              data: taskTagData,
            });
          }
    
        return res.status(200).json({message: 'Association listed Sucessfully', data: taskTagData})
        
    } catch (error) {
        console.log(error);
    return res
      .status(500)
      .json({ message: "error at listed TaskTag", error: error });
    }

}

export const deleteTaskTag = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id

    const deletedTaskTag = await TaskTag.destroy({where:{id: id}})

    return res.status(200).json({message: "Association deleted sucessfully"})
    
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "error at deleted TaskTag", error: error });
  }
}