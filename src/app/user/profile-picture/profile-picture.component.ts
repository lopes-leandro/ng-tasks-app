import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { User } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'tks-profile-picture',
  templateUrl: './profile-picture.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePictureComponent implements OnChanges {
  @Input() user!: User;
  pictureSafeUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.user) {
      this.pictureSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.user.pictureUrl
      );
    }
  }
}
