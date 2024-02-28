import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [],
  exports: [
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule  
  ],
  imports: [
    CommonModule,
  ]
})
export class MatModule { }
