import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplitButton } from './splitbutton/splitbutton';

@NgModule({
  imports: [CommonModule],
  declarations: [SplitButton],
  exports: [SplitButton],
})
export class NgxFluentButtonsModule {}
