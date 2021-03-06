import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from '../shared/models/task.interface';
import { Project } from '../shared/models/project.interface';
import { User } from '../shared/models/user.interface';

export class Database implements InMemoryDbService {
  createDb(): {} {
    const users: User[] = [
      { id: 1, name: 'Maxwel', pictureUrl: '/assets/avatars.svg' },
    ];

    const projects: Project[] = [
      {
        id: 1,
        title: 'Meu primeiro projeto',
        description: 'Este é seu primeiro projeto.',
        comments: [],
      },
      {
        id: 2,
        title: 'Meu segundo projeto',
        description: 'Este é seu segundo projeto.',
        comments: [],
      },
    ];

    const tasks: Task[] = [
      { id: 1, projectId: 1, title: 'Tarefa 1', done: false },
      { id: 2, projectId: 2, title: 'Tarefa 2', done: true },
      { id: 3, projectId: 1, title: 'Tarefa 3', done: false },
      { id: 4, projectId: 2, title: 'Tarefa 4', done: true },
    ];

    return { tasks, projects, users };
  }
}
