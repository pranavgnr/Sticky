import { Component } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';

@Component({
  selector: 'app-sticky',
  templateUrl: './sticky.component.html',
  styleUrl: './sticky.component.css'
})
export class StickyComponent {

  editor = new Editor({
    extensions: [StarterKit],
  });

  value = '<p>Placeholder text</p>'; // can be HTML or JSON, see https://www.tiptap.dev/api/editor#content

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
