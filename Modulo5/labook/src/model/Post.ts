export enum POST_Type {
    COMMON = "COMMON",
    EVENT = "EVENT"
}

export class Post {
    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private creation_date: Date,
        private type: POST_Type,
        private creatorId_post: string
    ) {}

    getId = () => {
        return this.id
    }

    getphoto = () => {
        return this.photo
    }

    getDescription = () => {
        return this.description
    }

    getCreationDate = () => {
        return this.creation_date
    }

    getype = () => {
        return this.type
    }

    getCreatorId = () => {
        return this.creatorId_post
    }

    
}