import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Micomponete0001Component } from './micomponete0001.component';

describe('Micomponete0001Component', () => {
  let component: Micomponete0001Component;
  let fixture: ComponentFixture<Micomponete0001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Micomponete0001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Micomponete0001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
