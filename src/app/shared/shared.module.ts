import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import {MatNativeDateModule} from "@angular/material/core";

const components = [ShellComponent, DeleteButtonComponent];

const modules = [
  CommonModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  LayoutModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatNativeDateModule,
  // MatMomentDateModule,
  RouterModule
];

@NgModule({
  declarations: [
    ...components,
    DeleteButtonComponent
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...components,
    ...modules
  ]
})
export class SharedModule { }
