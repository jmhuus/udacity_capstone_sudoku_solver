import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { HttpClientModule } from '@angular/common/http';
import { BoardOfTheDayComponent } from './board-of-the-day/board-of-the-day.component';
import { ApiTokenComponent } from './api-token/api-token.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoardOfTheDayComponent,
    ApiTokenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
