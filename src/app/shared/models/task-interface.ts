export interface TaskInterface {
    id?: number;
    title: string;
    done: boolean;
}

export type TaskListFilterType = 'all' | 'open' | 'done';