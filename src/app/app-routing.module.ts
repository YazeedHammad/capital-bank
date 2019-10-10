import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component';
import { AccListComponent } from './account/acc-list/acc-list.component';
import { AuthGuard } from '../app/login/auth.guard';
import { AccEditComponent } from './account/acc-edit/acc-edit.component';
import { AccCardComponent } from './account/acc-card/acc-card.component';
import { AccNewComponent } from './account/acc-new/acc-new.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'accounts', component: AccListComponent, canActivate: [AuthGuard], children: [
      { path: 'new', component: AccNewComponent },
      { path: ':id', component: AccListComponent },
      { path: ':id/edit', component: AccEditComponent },
    ]
  },
  { path: 'cards', component: AccCardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
