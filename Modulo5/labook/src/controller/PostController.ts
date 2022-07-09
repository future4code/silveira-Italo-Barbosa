import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { UserBusiness } from "../business/UserBusiness";
import { PostInputDTO } from "../types/postInputDTO";

export class PostController {

    constructor(
        private postBusiness: PostBusiness
    ) { }
    
    createPost = async (req: Request, res: Response) => {
        try {

            const token = req.headers.authorization as string
            const { foto, descricao, data_criacao, tipo } = req.body

            const post: PostInputDTO = {
                foto,
                descricao,
                data_criacao,
                tipo,
                token
            }

            const newPost = await this.postBusiness.createPost(post)

            res.status(201).send({ message: "Post criado com sucesso", newPost})
            
        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    getPostId = async (req: Request, res: Response) => {
        try {

            const token = req.headers.authorization as string
            const postId = req.params.id

            const post = await this.postBusiness.getPostById(postId, token)

            res.status(200).send({ post })
            
        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }
}