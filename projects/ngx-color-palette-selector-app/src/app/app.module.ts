import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgxColorPaletteSelectorModule} from "../../../ngx-color-palette-selector/src/lib/ngx-color-palette-selector.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxColorPaletteSelectorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
