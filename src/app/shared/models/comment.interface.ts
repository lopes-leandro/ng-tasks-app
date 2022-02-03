import { User } from "./user.interface";

export interface Comment {
    readonly time: number;
    readonly user: User;
    readonly content: string;
}

export interface CommentUpdate {
    readonly index: number;
    readonly comment: Comment;
}
