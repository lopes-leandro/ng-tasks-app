import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'tks-editor',
  templateUrl: './editor.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorComponent implements OnChanges, AfterViewInit {
  @Input() content!: string | undefined;
  @Input() showControls: boolean = false;
  @Output() outSaveEdit = new EventEmitter<string>();
  @Output() outCancelEdit = new EventEmitter<never>();
  @ViewChild('editableContentElement') editableContentElement!: ElementRef;
  @HostBinding('class.edit-mode') editMode = false;

  constructor() {}

  ngAfterViewInit(): void {
    this.setEditableContent(this.content);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.content && this.editableContentElement) {
      this.setEditableContent(this.content);
    }
  }

  @HostListener('click')
  public focusEditableContent(): void {
    if (this.editMode) {
      this.editableContentElement.nativeElement.focus();    
    }
  }

  public saveEdit():void {
    this.editMode = false;
    this.outSaveEdit.emit(this.getEditableContent());
  }

  public cancelEdit(): void {
    this.editMode = false;
    this.setEditableContent(this.content);
    this.outCancelEdit.emit();
  }

  public beginEdit() {
    this.editMode = true;
  }

  private getEditableContent() {
    return this.editableContentElement.nativeElement.textContent;
  }

  private setEditableContent(content: string | undefined) {
    this.editableContentElement.nativeElement.textContent = (content || "-");
  }
}
