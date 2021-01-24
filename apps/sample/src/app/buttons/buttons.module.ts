import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

import { NgxFluentButtonsModule } from 'ngx-fluent-buttons';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { ButtonsComponent } from './buttons.component';

@NgModule({
  declarations: [ButtonsComponent],
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    NgxFluentButtonsModule,
  ],
})
export class ButtonsModule {}
