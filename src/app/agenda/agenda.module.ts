import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MatInputModule } from '@angular/material/input';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { AgendaRoutingModule } from './agenda-routing.module';
import { ManageComponent } from './manage/manage.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { GamenightComponent } from './gamenight/gamenight.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { SharedGamesListComponent } from './gamenight/shared-games-list/shared-games-list.component';
import { MySelectedGamesListComponent } from './gamenight/my-selected-games-list/my-selected-games-list.component';
import { TopGamesListComponent } from './gamenight/top-games-list/top-games-list.component';


@NgModule({
  declarations: [
    ManageComponent,
    GamenightComponent,
    SharedGamesListComponent,
    MySelectedGamesListComponent,
    TopGamesListComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    SharedModule,
    MatInputModule,
    MatDatepickerModule,
    MatGridListModule,
    DragDropModule
  ]
})
export class AgendaModule { }
