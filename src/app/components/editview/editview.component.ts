import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editview',
  templateUrl: './editview.component.html',
  styleUrls: ['./editview.component.scss']
})

export class EditviewComponent implements OnInit {
  editor: HTMLIFrameElement;
  showingSourceCode = false;
  isInEditMode = true;

  constructor() { }

  ngOnInit() {
    console.log('on init editview');
    this.editor = (<HTMLIFrameElement>document.getElementById('editor'));
    this.editor.contentWindow.document.designMode = 'On';
  }

  execCmd(command) {
    this.editor.contentWindow.document.execCommand(command, false, null);
  }

  execCommandWithArg(command, arg) {
    this.editor.contentWindow.document.execCommand(command, false, arg);
  }

  toggleSource() {
    if (this.showingSourceCode) {
      this.editor.contentWindow.document.getElementsByTagName('body')[0].innerHTML
        = this.editor.contentWindow.document.getElementsByTagName('body')[0].textContent;
      this.showingSourceCode = false;
    } else {
      this.editor.contentWindow.document.getElementsByTagName('body')[0].textContent
        = this.editor.contentWindow.document.getElementsByTagName('body')[0].innerHTML;
      this.showingSourceCode = true;
    }
  }
}
