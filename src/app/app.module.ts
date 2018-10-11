/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';

/* Components */
import { AppComponent } from './app.component';
import { FolderlistComponent } from './components/folderlist/folderlist.component';
import { NotelistComponent } from './components/notelist/notelist.component';
import { EditviewComponent } from './components/editview/editview.component';
import { EditorPageComponent } from './components/editor-page/editor-page.component';

/* Adding Electron */
import { NgxElectronModule } from 'ngx-electron';


/* Pipes */
import { SearchNoteFilter } from './pipes/search-note-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FolderlistComponent,
    NotelistComponent,
    EditviewComponent,
    EditorPageComponent,
    SearchNoteFilter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgxElectronModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
