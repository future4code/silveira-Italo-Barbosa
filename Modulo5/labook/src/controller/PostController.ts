import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostType } from "../model/PostType";

export class PostController {

    constructor(
        private postBusiness: PostBusiness
    ) { }
    
    createPost = async (request: Request, response: Response) => {
        try {

            const token = request.headers.authorization as string
            const { photo, description, creation_date, type } = request.body

            const post: PostType = {
                photo,
                description,
                creation_date,
                type,
                token
            }

            const newPost = await this.postBusiness.createPost(post)

            response.status(201).send({ message: "sucessfully posted", newPost})
            
        } catch (error) {
            
            if(error instanceof Error ){
                throw new Error(error.message)
              }else{
                throw new Error("erro desconhecido")
              }
            
        }
    }

    getPost = async (request: Request, response: Response) => {
        try {

            const token = request.headers.authorization as string
            const postId = request.params.id

            const post = await this.postBusiness.getPostId(postId, token)

            response.status(200).send({ post })
            
        } catch (error) {
            if(error instanceof Error ){
                throw new Error(error.message)
              }else{
                throw new Error("erro desconhecido")
              }
            
        }
    }
}