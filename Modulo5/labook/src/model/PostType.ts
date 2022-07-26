import { POST_Type } from "./Post"

export type PostType = {
    photo: string
    description: string
    creation_date: Date
    type: POST_Type
    token: string
}