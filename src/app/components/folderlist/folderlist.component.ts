import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Folderlist } from 'classes/folderlist';


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

  constructor() { }

  ngOnInit() {
    console.log('init');
    // const testuser = {
    //   name: 'hannes',
    //   email: 'test',
    //   password: 'test',
    //   pgpkey: 'key'
    // };
    // database.createUser(testuser);
    console.log(environment.folderlist);
    this.folderlists = environment.folderlist;
    // this.http.get(this.serverUrl + '/folderlist').subscribe(
    //   (data) => console.log(data), // success path
    //   error => console.log(error) // error path
    // );

  }
}
