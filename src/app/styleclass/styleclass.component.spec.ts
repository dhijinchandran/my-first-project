import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleclassComponent } from './styleclass.component';

describe('StyleclassComponent', () => {
  let component: StyleclassComponent;
  let fixture: ComponentFixture<StyleclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StyleclassComponent]
    });
    fixture = TestBed.createComponent(StyleclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
