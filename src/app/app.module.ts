import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './User/user.component';
import { EntryComponent } from './entry/entry.component';
import { EditComponent } from './user/edit/edit.component';
import { AppRoutingModule } from './app-routing.module';
 
 

@NgModule({
  imports:      [
     BrowserModule, FormsModule, AppRoutingModule 
      ],
  declarations: [
    AppComponent, UserComponent, EntryComponent, EditComponent 
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
