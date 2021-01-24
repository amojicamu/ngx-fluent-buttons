import { Component } from '@angular/core';

@Component({
  selector: 'ngx-fluent-buttons-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {
  myHandler(event): void {
    console.log(event);
  }
}
