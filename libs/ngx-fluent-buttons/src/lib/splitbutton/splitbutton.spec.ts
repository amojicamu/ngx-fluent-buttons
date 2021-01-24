import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SplitButton } from './splitbutton';

describe('SplitButton', () => {
  let component: SplitButton;
  let fixture: ComponentFixture<SplitButton>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitButton ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
