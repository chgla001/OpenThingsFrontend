import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Adding Electron */
import { NgxElectronModule } from 'ngx-electron';

import { AppComponent } from './app.component';
import { FolderlistComponent } from './components/folderlist/folderlist.component';
import { NotelistComponent } from './components/notelist/notelist.component';
import { EditviewComponent } from './components/editview/editview.component';

@NgModule({
  declarations: [
    AppComponent,
    FolderlistComponent,
    NotelistComponent,
    EditviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxElectronModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
