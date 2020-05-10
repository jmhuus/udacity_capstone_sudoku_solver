import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { BoardOfTheDayComponent } from './board-of-the-day/board-of-the-day.component';


const routes: Routes = [
  { path: '', component: BoardOfTheDayComponent},
  { path: 'my-boards', component: BoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
