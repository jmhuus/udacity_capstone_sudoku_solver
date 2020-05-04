import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { LoginComponent } from './login/login.component';
import { LoginResultComponent } from './login-result/login-result.component';


const routes: Routes = [
  { path: '', component: BoardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'login-result', component: LoginResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
