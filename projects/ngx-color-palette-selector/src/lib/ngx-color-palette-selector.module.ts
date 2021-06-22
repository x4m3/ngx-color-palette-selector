import { NgModule } from '@angular/core';
import { NgxColorPaletteSelectorComponent } from './ngx-color-palette-selector/ngx-color-palette-selector.component';
import { CircleComponent } from './circle/circle.component';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    NgxColorPaletteSelectorComponent,
    CircleComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    NgxColorPaletteSelectorComponent
  ]
})
export class NgxColorPaletteSelectorModule { }
