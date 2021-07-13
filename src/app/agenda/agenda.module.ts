import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MatInputModule } from '@angular/material/input';

import { AgendaRoutingModule } from './agenda-routing.module';
import { ManageComponent } from './manage/manage.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { GamenightComponent } from './gamenight/gamenight.component';


@NgModule({
  declarations: [
    ManageComponent,
    GamenightComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    SharedModule,
    MatInputModule,
    MatDatepickerModule
  ]
})
export class AgendaModule { }
