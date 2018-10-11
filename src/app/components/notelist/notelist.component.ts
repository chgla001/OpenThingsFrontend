import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Note } from 'classes/note';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'app/services/task-service.service';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.scss']
})
export class NotelistComponent implements OnInit {
  notelist: Array<Note>;
  subscriber;
  folderid;

  constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService) { }


  ngOnInit() {
    console.log('notelist init');
    this.notelist = environment.notelist;
    // this.subscriber = this.route.params.subscribe(params => {
    //   this.id = +params['folderid']; // (+) converts string 'id' to a number
    //   console.log(this.id);
    // });



    this.taskService.folderid$.subscribe(
      (folderid) => {
        console.log('changed', folderid);
        this.folderid = folderid;
      }
    );


  }

  setTaskId(taskId) {
    this.taskService.taskid = taskId;
  }
}
