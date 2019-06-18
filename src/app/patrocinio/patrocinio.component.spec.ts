import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrocinioComponent } from './patrocinio.component';

describe('PatrocinioComponent', () => {
  let component: PatrocinioComponent;
  let fixture: ComponentFixture<PatrocinioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatrocinioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrocinioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
