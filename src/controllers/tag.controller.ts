import { NextFunction, Request, Response } from "express";
import { Tag } from "../models/tag.models";

export const createTag = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {name, color} = req.body

        const tagCreated = await Tag.create({
            name: name,
            color: color
        })

        return res
        .status(201)
        .json({ message: "Tag created with success", data: tagCreated });
        
    } catch (error) {
        console.log(error);
        return res
          .status(500)
          .json({ message: "error at created Tag", error: error });
    }
}

export const listTag = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tagData = await Tag.findAll()
        
        if (!tagData.length) {
            return res.status(404).json({
              message: "Tag not found",
              data: tagData,
            });
          }
    
          return res.status(200).json({message: 'Tag listed Sucessfully', data: tagData})
        
    } catch (error) {
        console.log(error);
        return res
          .status(500)
          .json({ message: "error at created Tag", error: error });
    }
}

export const updateTag = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {name, color} = req.body
        const id = req.params.id
        const updatedContent:any = {}
    
        if (name) {
            updatedContent.name = name
        }
    
        if (color) {
            updatedContent.color = color
        }
    
        const updatedTag = await Tag.update(
            {...updatedContent},
            {where:{tagId: id}}
        )

        return res.status(201).json({message: "Tag updated sucessfully"})
        
    } catch (error) {
        console.log(error);
    return res
      .status(500)
      .json({ message: "error at created Tag", error: error });
    }
}

export const deleteTag = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id

        const deletedTag = await Tag.destroy({where:{tagId: id}})

        return res.status(200).json({message: 'Tag deleted sucessfully'})
        
    } catch (error) {
        console.log(error);
    return res
      .status(500)
      .json({ message: "error at created Tag", error: error });
    }
}