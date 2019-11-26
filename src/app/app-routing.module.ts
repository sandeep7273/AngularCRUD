import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './User/user.component';
import { EntryComponent } from './entry/entry.component';
import { EditComponent } from './user/edit/edit.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {path: 'user' , component: UserComponent },
    {path: 'entry' , component: EntryComponent },
    {path: 'edit' , component: EditComponent },
    {path: '' , component: EntryComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), CommonModule],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }