import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './manage/manage.component';
import {GamenightComponent} from "./gamenight/gamenight.component";

const routes: Routes = [
  {path: '', component:ManageComponent},
  {path: 'gamenight/:id', component:GamenightComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
