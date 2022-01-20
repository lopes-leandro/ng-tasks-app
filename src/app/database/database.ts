import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";
import { TaskInterface } from "../shared/models/task-interface";

export class Database implements InMemoryDbService {
    createDb(): {} {
        const tasks: TaskInterface[] = [
            {id: 1, title: 'Tarefa 1', done: false},
            {id: 2, title: 'Tarefa 2', done: true},
            {id: 3, title: 'Tarefa 3', done: false},
            {id: 4, title: 'Tarefa 4', done: true},
        ];

        return {tasks};
    }
}
