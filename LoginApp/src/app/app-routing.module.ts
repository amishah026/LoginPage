import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ManagerComponent } from './manager/manager.component';
import { ProgrammerComponent } from './programmer/programmer.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'home', component:LoginComponent},
{ path: 'user', component: UserComponent},
{ path: 'manager', component: ManagerComponent},
{ path: 'programmer', component: ProgrammerComponent},
{ path: 'admin', component: AdminComponent},
{ path: '**', redirectTo: 'home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
