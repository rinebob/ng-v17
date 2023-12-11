import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SandboxRoutes } from './common/interfaces'
import { AngNewFeaturesComponent } from './ang-new-features/ang-new-features.component';
import { BooksViewComponent } from './books-view/books-view.component';

const routes: Routes = [
  {path: '', redirectTo: SandboxRoutes.BOOKS_APP, pathMatch: 'full' },
  {path: SandboxRoutes.ANGULAR_NEW_FEATURES, component: AngNewFeaturesComponent},
  {path: SandboxRoutes.BOOKS_APP, component: BooksViewComponent},
  {path: '**', redirectTo: SandboxRoutes.BOOKS_APP, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
