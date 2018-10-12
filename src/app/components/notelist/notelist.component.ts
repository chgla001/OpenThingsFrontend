import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Note } from 'classes/note';
import { TaskService } from 'app/services/task-service.service';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.scss']
})
export class NotelistComponent implements OnInit {
  notelist: Array<Note>;
  subscriber;
  selectedFolderId;
  selectedTaskId;
  searchNote = '';
  showModal = false;
  newNoteTitle = '';

  constructor(private taskService: TaskService) { }


  ngOnInit() {
    // console.log('notelist init');
    this.notelist = environment.notelist;

    this.taskService.folderid$.subscribe(
      (folderid) => {
        // console.log('changed', folderid);
        this.selectedFolderId = folderid;
      }
    );

    this.taskService.taskid$.subscribe(
      (taskid) => {
        // console.log('changed', taskid);
        this.selectedTaskId = taskid;
      }
    );


  }

  setTaskId(taskId) {
    this.taskService.taskid = taskId;
  }

  openNewNoteModal() {
    this.showModal = true;
  }

  hideNewNoteModal() {
    this.showModal = false;
    this.newNoteTitle = '';
  }

  addNewNoteToNotelist() {
    const newNote = new Note(null, this.newNoteTitle, (new Date()).toLocaleDateString(), '');
    this.notelist.push(newNote);
    this.newNoteTitle = '';
    this.showModal = false;
  }
}
