import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SandboxRoutes } from './common/interfaces'
import { AngNewFeaturesComponent } from './ang-new-features/ang-new-features.component';
import { BooksViewComponent } from './books-view/books-view.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { DeferrableViewsComponent } from './deferrable-views/deferrable-views.component';
import { ViewTransitionsComponent } from './view-transitions/view-transitions.component';

const routes: Routes = [
  {path: '', redirectTo: SandboxRoutes.CONTROL_FLOW, pathMatch: 'full' },
  {path: SandboxRoutes.ANGULAR_NEW_FEATURES, component: AngNewFeaturesComponent},
  {path: SandboxRoutes.CONTROL_FLOW, component: ControlFlowComponent},
  {path: SandboxRoutes.DEFERRABLE_VIEWS, component: DeferrableViewsComponent},
  {path: SandboxRoutes.VIEW_TRANSITIONS, component: ViewTransitionsComponent},
  {path: SandboxRoutes.BOOKS_APP, component: BooksViewComponent},
  {path: '**', redirectTo: SandboxRoutes.BOOKS_APP, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
