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

  constructor(private taskService: TaskService) { }


  ngOnInit() {
    console.log('notelist init');
    this.notelist = environment.notelist;

    this.taskService.folderid$.subscribe(
      (folderid) => {
        console.log('changed', folderid);
        this.selectedFolderId = folderid;
      }
    );

    this.taskService.taskid$.subscribe(
      (taskid) => {
        console.log('changed', taskid);
        this.selectedTaskId = taskid;
      }
    );


  }

  setTaskId(taskId) {
    this.taskService.taskid = taskId;
  }
}
