import { Post } from "../../model/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {

    private static TABLE_NAME = "Labook_post"
    
    insertPost = async (newPost: Post) => {
        try {
            await BaseDatabase.connection()
                .insert({
                    id: newPost.getId(),
                    photo: newPost.getphoto(),
                    description: newPost.getDescription(),
                    creation_date: newPost.getCreationDate(),
                    type: newPost.getype(),
                    creatorId: newPost.getCreatorId()
                })
                .into(PostDatabase.TABLE_NAME)

        } catch (error) {
            if(error instanceof Error ){
                throw new Error(error.message)
              }else{
                throw new Error("erro desconhecido")
              }
        }
    }

    selectPostId = async (postId: string) => {
        try {
            const result = await BaseDatabase.connection()
                .select("*")
                .from(PostDatabase.TABLE_NAME)
                .where("id", postId)

            return result[0]
            
        } catch (error) {
            if(error instanceof Error ){
                throw new Error(error.message)
              }else{
                throw new Error("erro desconhecido")
              } 
        }
    }
}