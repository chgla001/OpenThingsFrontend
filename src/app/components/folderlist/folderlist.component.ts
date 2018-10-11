import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Folderlist } from 'classes/folderlist';
import { Router } from '@angular/router';
import { TaskService } from 'app/services/task-service.service';


@Component({
  selector: 'app-folderlist',
  templateUrl: './folderlist.component.html',
  styleUrls: ['./folderlist.component.scss']
})
export class FolderlistComponent implements OnInit {
  openFavourites = false;
  openWork = false;
  openPrivate = false;
  folderlists: Array<Folderlist>;
  serverUrl = 'http://127.0.0.1:4000';
  selectedFolderid;

  constructor(private router: Router, private taskService: TaskService) { }

  ngOnInit() {
    // console.log('init');
    // const testuser = {
    //   name: 'hannes',
    //   email: 'test',
    //   password: 'test',
    //   pgpkey: 'key'
    // };
    // database.createUser(testuser);
    // console.log(environment.folderlist);
    this.folderlists = environment.folderlist;
    // this.http.get(this.serverUrl + '/folderlist').subscribe(
    //   (data) => console.log(data), // success path
    //   error => console.log(error) // error path
    // );

    this.taskService.folderid$.subscribe(
      (folderid) => {
        // console.log('changed', folderid);
        this.selectedFolderid = folderid;
      }
    );

  }

  setFolderId(folderId) {
    this.taskService.folderid = folderId;
  }

  showContextmenu(event) {
    event.preventDefault();
    console.log('contextmenu', event);
  }
}
