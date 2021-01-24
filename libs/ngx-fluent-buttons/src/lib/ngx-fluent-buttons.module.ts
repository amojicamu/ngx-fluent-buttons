import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

import { SplitButton } from './splitbutton/splitbutton';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
  ],
  declarations: [SplitButton],
  exports: [SplitButton],
})
export class NgxFluentButtonsModule {}
