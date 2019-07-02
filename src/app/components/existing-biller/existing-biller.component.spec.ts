import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingBillerComponent } from './existing-biller.component';

describe('ExistingBillerComponent', () => {
  let component: ExistingBillerComponent;
  let fixture: ComponentFixture<ExistingBillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingBillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingBillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
