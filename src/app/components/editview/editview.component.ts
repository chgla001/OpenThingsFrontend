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
    const selectFont = <HTMLSelectElement> document.getElementById('selectFont');
    console.log(selectFont);
    this.execCommandWithArg('fontName', selectFont.value);
  }

  selectHeadline(){
    const selectHeadline = <HTMLSelectElement> document.getElementById('selectHeadline');
    console.log(selectHeadline);
    this.execCommandWithArg('formatBlock', selectHeadline.value);
  }

  selectFontsize(){
    const selectFontsize = <HTMLSelectElement> document.getElementById('selectFontsize');
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
