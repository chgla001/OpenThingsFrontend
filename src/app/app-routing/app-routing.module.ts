import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorPageComponent } from 'app/pages/editor-page/editor-page.component';
import { TimetrackerPageComponent } from 'app/pages/timetracker-page/timetracker-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: EditorPageComponent },
  { path: 'tasks/:folderid', component: EditorPageComponent },
  { path: 'tasks/:folderid/:taskid', component: EditorPageComponent },
  { path: 'timetracker', component: TimetrackerPageComponent },
  // { path: "product/:id", component: ProductDetailComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'products', component: ProductListComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class AppRoutingModule { }
