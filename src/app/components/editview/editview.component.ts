import { Component, OnInit } from '@angular/core';
import { TaskService } from 'app/services/task-service.service';
import { environment } from '../../../environments/environment';
import { Note } from 'classes/note';

@Component({
  selector: 'app-editview',
  templateUrl: './editview.component.html',
  styleUrls: ['./editview.component.scss']
})

export class EditviewComponent implements OnInit {
  editor: HTMLIFrameElement;
  showingSourceCode = false;
  isInEditMode = true;
  notelist;
  noteid;
  selectedNote = {} as Note;
  selectedFont;
  iFrameDocument;
  selectedFontColor;
  selectedBackgroundColor;
  colorList = ['000000', '993300', '333300', '003300', '003366', '000066', '333399', '333333',
    '660000', 'FF6633', '666633', '336633', '336666', '0066FF', '666699', '666666', 'CC3333',
    'FF9933', '99CC33', '669966', '66CCCC', '3366FF', '663366', '999999', 'CC66FF', 'FFCC33',
    'FFFF66', '99FF66', '99CCCC', '66CCFF', '993366', 'CCCCCC', 'FF99CC', 'FFCC99', 'FFFF99',
    'CCffCC', 'CCFFff', '99CCFF', 'CC99FF', 'FFFFFF'];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    // console.log('on init editview');
    this.editor = (<HTMLIFrameElement>document.getElementById('editor'));
    this.iFrameDocument = this.editor.contentWindow.document;
    this.iFrameDocument.designMode = 'On';

    // console.log(environment.notelist);
    this.notelist = environment.notelist;

    this.taskService.taskid$.subscribe(
      (noteid) => {
        // console.log('changed', noteid);
        this.noteid = noteid;
        this.getNoteFromNoteList(this.noteid);
      }
    );
  }

  execCmd(command) {
    this.iFrameDocument.execCommand(command, false, null);
  }

  execCommandWithArg(command, arg) {
    console.log(command, arg);
    this.iFrameDocument.execCommand(command, false, arg);
  }

  selectFont() {
    const selectFont = <HTMLSelectElement>document.getElementById('selectFont');
    console.log(selectFont);
    this.execCommandWithArg('fontName', selectFont.value);
  }

  selectHeadline() {
    const selectHeadline = <HTMLSelectElement>document.getElementById('selectHeadline');
    console.log(selectHeadline);
    this.execCommandWithArg('formatBlock', selectHeadline.value);
  }

  selectFontsize() {
    const selectFontsize = <HTMLSelectElement>document.getElementById('selectFontsize');
    console.log(selectFontsize);
    this.execCommandWithArg('fontSize', selectFontsize.value);
  }

  toggleSource() {
    if (this.showingSourceCode) {
      this.iFrameDocument.getElementsByTagName('body')[0].innerHTML
        = this.iFrameDocument.getElementsByTagName('body')[0].textContent;
      this.showingSourceCode = false;
    } else {
      this.iFrameDocument.getElementsByTagName('body')[0].textContent
        = this.iFrameDocument.getElementsByTagName('body')[0].innerHTML;
      this.showingSourceCode = true;
    }
  }

  getNoteFromNoteList(noteid) {
    this.notelist.forEach((element: Note) => {
      if (element.id === noteid) {
        // console.log(element);
        this.selectedNote = element;
        this.iFrameDocument.getElementsByTagName('body')[0].innerHTML = this.selectedNote.text;
      }
    });
  }
  saveNote() {
    console.log('saved', this.iFrameDocument.getElementsByTagName('body')[0].innerHTML);
    this.selectedNote.text = this.iFrameDocument.getElementsByTagName('body')[0].innerHTML;
  }
}
