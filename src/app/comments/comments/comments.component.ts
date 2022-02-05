import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {
  Comment,
  CommentUpdate,
} from 'src/app/shared/models/comment.interface';
import { User } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'tks-comments',
  templateUrl: './comments.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsComponent {
  @Input() user!: User;
  @Input() comments!: Comment[];
  @Output() outUpdateComment = new EventEmitter<CommentUpdate>();
  @Output() outCreateComment = new EventEmitter<Comment>();
  @ViewChild('commentContentEditable') commentContentEditable!: ElementRef;

  constructor() {
  }

  public createComment(): void {
    this.outCreateComment.emit({
      user: this.user,
      time: +new Date(),
      content: this.commentContentEditable.nativeElement.textContent
    });    
    this.commentContentEditable.nativeElement.textContent = '';
  }

  public updateComment(index: number, comment: Comment): void {
    this.outUpdateComment.emit({
      index,
      comment
    });
  }

}
