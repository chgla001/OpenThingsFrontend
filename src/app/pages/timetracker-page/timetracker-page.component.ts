import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timetracker-page',
  templateUrl: './timetracker-page.component.html',
  styleUrls: ['./timetracker-page.component.scss']
})
export class TimetrackerPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('timetracker loaded');
  }

}
