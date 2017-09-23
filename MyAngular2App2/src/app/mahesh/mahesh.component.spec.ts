import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaheshComponent } from './mahesh.component';

describe('MaheshComponent', () => {
  let component: MaheshComponent;
  let fixture: ComponentFixture<MaheshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaheshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaheshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
