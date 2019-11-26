import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './User/user.component';
 
 

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, UserComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

