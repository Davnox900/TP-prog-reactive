import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionCountryComponent } from './selection-country.component';

describe('SelectionCountryComponent', () => {
  let component: SelectionCountryComponent;
  let fixture: ComponentFixture<SelectionCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionCountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
