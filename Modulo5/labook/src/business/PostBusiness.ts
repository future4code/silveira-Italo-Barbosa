import { PostDatabase } from "../data/mySQL/PostDatabase";
import { Post, POST_Type } from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/generateId";
import { PostType } from "../model/PostType";

export class PostBusiness {

    constructor(
        private idGenerator: IdGenerator,
        private postDatabase: PostDatabase,
        private authenticator: Authenticator
    ){}
    
    createPost = async (post: PostType) => {
        try {

            const { token, photo, description, type } = post
            let { creation_date } = post

            if (!token) {
                throw new Error("Invalid Token or missing")
            }

            const TokenDate = this.authenticator.getData(token)

            if (!TokenDate) {
                throw new Error("Token inexistent ")
            }

            if ( !description || !type ){
                throw new Error("one of the fields is empty")
            }

            if (type !== POST_Type.COMUM && type !== POST_Type.EVENT) {
                throw new Error("the type of event is not acceptable, common or event saccepted.")
            }

            if (!creation_date) {
                creation_date = new Date()
            }

            const postId = this.idGenerator.generateId()

            const newPost = new Post(
                postId,
                photo,
                description,
                creation_date,
                type,
                TokenDate.id  
            )

            await this.postDatabase.insertPost(newPost)

            return newPost
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getPostId = async (postId: string, token: string) => {
        try {

            if (!token) {
                throw new Error("where is the token, I do not see it ??")
            }

            if (!postId) {
                throw new Error("id?? where??")
            }

            const TokenData = this.authenticator.getData(token)

            if (!TokenData) {
                throw new Error("Invalid token")
            }

            const post = await this.postDatabase.selectPostId(postId)

            if (!post) {
                throw new Error("this post I never saw and the server never saw.")
            }

            return post
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message) 
        }
    }
}