import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Folderlist } from 'classes/folderlist';
import { Router } from '@angular/router';
import { TaskService } from 'app/services/task-service.service';
import { Folder } from 'classes/folder';


@Component({
  selector: 'app-folderlist',
  templateUrl: './folderlist.component.html',
  styleUrls: ['./folderlist.component.scss']
})
export class FolderlistComponent implements OnInit {
  @ViewChild('contextmenu') contextmenu: ElementRef;
  openFavourites = false;
  openWork = false;
  openPrivate = false;
  folderlists: Array<Folderlist>;
  serverUrl = 'http://127.0.0.1:4000';
  selectedFolderElement;
  selectedFolderid;
  selectedFolderObject: Folder;
  showRenameFolderModal = false;
  newFolderTitle = '';

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

    /* hide contextmenu, when clicked on document but not on context menu item */
    document.addEventListener('click', (event: any) => {
      if (!event.target.classList.contains('contextmenu__menu-item')) {
        this.contextmenu.nativeElement.style.display = 'none';

        if (this.selectedFolderElement) {
          this.selectedFolderElement.contentEditable = false;
        }
      }
    });

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

  showContextmenu(event: MouseEvent, folder) {
    this.selectedFolderObject = folder;
    event.preventDefault();
    console.log(event);
    this.contextmenu.nativeElement.style.top = event.clientY + 10 + 'px';
    this.contextmenu.nativeElement.style.left = event.clientX + 10 + 'px';
    this.contextmenu.nativeElement.style.display = 'block';
    this.selectedFolderElement = event.target;
  }

  openRenameFolderModal() {
    this.showRenameFolderModal = true;
    this.contextmenu.nativeElement.style.display = 'none';
  }

  hideRenameFolderModal() {
    this.showRenameFolderModal = false;
    this.newFolderTitle = '';
  }

  renameFolder() {
    this.selectedFolderObject.foldername = this.newFolderTitle;
    this.newFolderTitle = '';
    this.showRenameFolderModal = false;
  }

  deleteFolder() {
    // TODO: Überarbeiten und per ID löschen
    console.log('dummy', this.selectedFolderObject.foldername + ' wurde gelöscht');
    this.selectedFolderObject = null;
  }
}
