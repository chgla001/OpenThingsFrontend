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
  selectedHighlightColor;
  colorList = ['0,0,0', '153,51,0', '51,51,0', '0,51,0', '0,51,102', '0,0,102', '51,51,153', '51,51,51',
    '102,0,0', '255,102,51', '102,102,51', '51,102,51', '51,102,102', '00,102,255', '102,102,153', '102,102,102',
    '204,51,51', '255,153,51', '153,204,51', '102,153,102', '102,204,204', '51,102,255', '102,51,102', '153,153,153',
    '204,102,255', '255,204,51', '255,255,102', '153,255,102', '153,204,204', '102,204,255', '153,51,102', '204,204,204',
    '255,153,204', '255,204,153', '255,255,153', '204,255,204', '204,255,255', '153,204,255', '204,153,255', '255,255,255'];
  hoverColor;

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

  openFontColorOverlay() {
    const fontColorPicker = <HTMLDivElement>document.getElementsByClassName('font-color-picker')[0];
    if (fontColorPicker.style.display === 'none' || fontColorPicker.style.display.length === 0) {
      fontColorPicker.style.display = 'block';
    } else {
      fontColorPicker.style.display = 'none';
    }
  }

  openHighlightColorOverlay() {
    const highlightColorPicker = <HTMLDivElement>document.getElementsByClassName('highlight-color-picker')[0];
    if (highlightColorPicker.style.display === 'none' || highlightColorPicker.style.display.length === 0) {
      highlightColorPicker.style.display = 'block';
    } else {
      highlightColorPicker.style.display = 'none';
    }
  }

  setFontColor(color) {
    console.log('selectFontColor' + color);
    this.selectedFontColor = color;
    const fontColorPicker = <HTMLDivElement>document.getElementsByClassName('font-color-picker')[0];
    fontColorPicker.style.display = 'none';
    this.execCommandWithArg('foreColor', 'rgb(' + color + ')');
  }
  setHighlightColor(color) {
    console.log('selectedHighlightColor' + color);
    this.selectedHighlightColor = color;
    const highlightColorPicker = <HTMLDivElement>document.getElementsByClassName('highlight-color-picker')[0];
    highlightColorPicker.style.display = 'none';
    this.execCommandWithArg('hiliteColor', 'rgb(' + color + ')');
  }
}
