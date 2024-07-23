import { NextFunction, Request, Response } from "express";
import { TaskTag } from "../models/taskTag.model"

export const createAssociation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {taskId, tagId} = req.body

        const associationCreated = await TaskTag.create({
            taskId: taskId,
            tagId: tagId
        })

        return res
        .status(201)
        .json({ message: "Association created with success", data: associationCreated });
        
    } catch (error) {
        console.log(error);
    return res
      .status(500)
      .json({ message: "error at created Task", error: error });
    }
}

export const listAssociation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const associationData = await TaskTag.findAll()
    
        if (!associationData.length) {
            return res.status(404).json({
              message: "Association not found",
              data: associationData,
            });
          }
    
        return res.status(200).json({message: 'Association listed Sucessfully', data: associationData})
        
    } catch (error) {
        console.log(error);
    return res
      .status(500)
      .json({ message: "error at created Task", error: error });
    }

}

export const deleteAssociation = async (req: Request, res: Response, next: NextFunction) => {

}