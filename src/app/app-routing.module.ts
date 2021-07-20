import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './user/auth.guard';
import {GamenightComponent} from "./agenda/gamenight/gamenight.component";
import {ManageComponent} from "./agenda/manage/manage.component";

const routes: Routes = [
  {
    path: "", component: ManageComponent,
  },
  {
    path: "agenda", loadChildren: () => import("./agenda/agenda.module").then(m=>m.AgendaModule), canActivate: [AuthGuard]
  },
  {
    path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'kanban', loadChildren: ()=> import("./kanban/kanban.module").then(m=>m.KanbanModule), canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
