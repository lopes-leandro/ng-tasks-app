import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ProjectService } from 'src/app/project/project.service';
import {
  Comment,
  CommentUpdate,
} from 'src/app/shared/models/comment.interface';
import { Project } from 'src/app/shared/models/project.interface';
import { User } from 'src/app/shared/models/user.interface';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'tks-project-comments-container',
  templateUrl: './project-comments-container.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCommentsContainerComponent {
  user!: Observable<User>;
  selectedProject!: Observable<Project | undefined>;
  projectComments!: Observable<Comment[] | undefined>;

  constructor(
    private projectService: ProjectService,
    private userService: UserService
  ) {
    this.user = this.userService.getCurrentUser();
    this.selectedProject = this.projectService.getSelectedProject();
    this.projectComments = this.selectedProject.pipe(
      map((project) => project?.comments)
    );
  }

  public createComment(comment: Comment): void {
    this.selectedProject.pipe(take(1)).subscribe((project) =>
      this.projectService.updateProject({
        ...project,
        comments: [...project!.comments, comment],
      } as Project)
    );
  }

  public updateComment(update: CommentUpdate): void {
    this.selectedProject.pipe(take(1)).subscribe((project) => {
      const updatedComments = project?.comments.slice() || [];
      updatedComments[update.index] = update.comment;
      this.projectService.updateProject({
        ...project,
        comments: updatedComments,
      } as Project);
    });
  }
}
