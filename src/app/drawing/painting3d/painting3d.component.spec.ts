import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Painting3dComponent } from './painting3d.component';

describe('Painting3dComponent', () => {
  let component: Painting3dComponent;
  let fixture: ComponentFixture<Painting3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Painting3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Painting3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
