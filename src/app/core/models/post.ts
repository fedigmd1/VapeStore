import { User } from "./auth";

export interface Post {
    _id: string,
    title: string
    user_id: User
    createdAt: string
    comments: string[]
    description: string
}