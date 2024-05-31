import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Heading from '@tiptap/extension-heading';
import Blockquote from '@tiptap/extension-blockquote';
import CodeBlock from '@tiptap/extension-code-block';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';

@Component({
  selector: 'app-sticky',
  templateUrl: './sticky.component.html',
  styleUrl: './sticky.component.css'
})
export class StickyComponent implements OnInit, OnDestroy {
  @ViewChild('editorElement', { static: true }) editorElement!: ElementRef;
  editor!: Editor;

  ngOnInit(): void {
    this.editor = new Editor({
      element: this.editorElement.nativeElement,
      extensions: [
        Document,
        Paragraph,
        Text,
        Heading,
        Blockquote,
        CodeBlock,
        Bold,
        Italic,
        BulletList,
        OrderedList,
        ListItem,
        TextStyle,
        StarterKit,
      ],
      content: `
        <h1>Notion-like Editor</h1>
        <p>Start writing here...</p>
        <blockquote>Blockquote example</blockquote>
        <pre><code>Code block example</code></pre>
      `,
    });
  }

  toggleBold() {
    this.editor.chain().focus().toggleBold().run();
  }

  toggleItalic() {
    this.editor.chain().focus().toggleItalic().run();
  }

  toggleBulletList() {
    this.editor.chain().focus().toggleBulletList().run();
  }

  toggleOrderedList() {
    this.editor.chain().focus().toggleOrderedList().run();
  }

  setParagraph() {
    this.editor.chain().focus().setParagraph().run();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
