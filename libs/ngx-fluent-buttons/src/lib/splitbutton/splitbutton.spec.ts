import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

import { SplitButton } from './splitbutton';

describe('SplitButton', () => {
  let component: SplitButton;
  let fixture: ComponentFixture<SplitButton>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          MatMenuModule,
          MatButtonModule,
          MatIconModule,
          MatRippleModule,
        ],
        declarations: [SplitButton],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
