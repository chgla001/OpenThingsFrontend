import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorPageComponent } from 'app/components/editor-page/editor-page.component';

const routes: Routes = [
  { path: '', component: EditorPageComponent },
  { path: ':folderid', component: EditorPageComponent },
  { path: ':folderid/:taskid', component: EditorPageComponent }
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
