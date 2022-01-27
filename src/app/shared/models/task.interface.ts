import { BehaviorSubject } from "rxjs";

export interface Task {
    readonly id?: number;
    readonly projectId?: number;
    readonly title: string;
    readonly done: boolean;
}

export type TaskListFilterType = 'all' | 'open' | 'done';

export interface BaseService {
    readonly tasks: BehaviorSubject<Task[]>;
}