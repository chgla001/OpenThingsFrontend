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

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    // console.log('on init editview');
    this.editor = (<HTMLIFrameElement>document.getElementById('editor'));
    this.editor.contentWindow.document.designMode = 'On';

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
    this.editor.contentWindow.document.execCommand(command, false, null);
  }

  execCommandWithArg(command, arg) {
    console.log(command, arg);

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

  getNoteFromNoteList(noteid) {
    this.notelist.forEach((element: Note) => {
      if (element.id === noteid) {
        // console.log(element);
        this.selectedNote = element;
        this.editor.contentWindow.document.getElementsByTagName('body')[0].innerHTML = this.selectedNote.text;
      }
    });
  }
  saveNote() {
    console.log('saved', this.editor.contentWindow.document.getElementsByTagName('body')[0].innerHTML);
    this.selectedNote.text = this.editor.contentWindow.document.getElementsByTagName('body')[0].innerHTML;
  }
}
