import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from 'src/app/shared/models/comment.interface';
import { User } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'tks-comment',
  templateUrl: './comment.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentComponent {

  @Input() comment!: Comment;
  @Input() user!: User;
  @Output() outUpdateComment = new EventEmitter<Comment>();

  constructor() { }

  public updateComment(content: string): void {
    this.outUpdateComment.emit({
      ...this.comment,
      content
    });
  }
}
