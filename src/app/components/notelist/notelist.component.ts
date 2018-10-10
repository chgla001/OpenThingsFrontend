import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Note } from 'classes/note';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.scss']
})
export class NotelistComponent implements OnInit {
  notelist: Array<Note>;
  subscriber;
  id;

  constructor(private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    console.log('notelist init');
    this.notelist = environment.notelist;
    this.subscriber = this.route.params.subscribe(params => {
      this.id = +params['folderid']; // (+) converts string 'id' to a number
      console.log(this.id);
    });
  }

  // ngOnDestroy() {
  //   this.subscriber.unsubscribe();
  // }

  routeTo(taskId) {
    this.router.navigate(['/' + this.id + '/' + taskId]);
    console.log('clicked route to');
  }

}
