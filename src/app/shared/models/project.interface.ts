import { Comment } from "./comment.interface";

export interface Project {
    readonly id?: number;
    readonly title: string;
    readonly description: string;
    readonly comments: Comment[];
}
