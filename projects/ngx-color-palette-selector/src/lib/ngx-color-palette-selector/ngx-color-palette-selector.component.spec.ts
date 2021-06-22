import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxColorPaletteSelectorComponent } from './ngx-color-palette-selector.component';

describe('NgxColorPaletteSelectorComponent', () => {
  let component: NgxColorPaletteSelectorComponent;
  let fixture: ComponentFixture<NgxColorPaletteSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxColorPaletteSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxColorPaletteSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
