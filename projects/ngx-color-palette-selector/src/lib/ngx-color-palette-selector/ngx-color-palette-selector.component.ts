import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Color} from './color';

@Component({
  selector: 'ngx-color-palette-selector',
  templateUrl: './ngx-color-palette-selector.component.html',
  styleUrls: ['./ngx-color-palette-selector.component.css']
})
export class NgxColorPaletteSelectorComponent implements OnInit {

  @Input() colors: string[] = [];
  _colors: Color[] = [];

  @Input() selected!: string;
  @Output() selectedChange = new EventEmitter<string>();

  // holds currently selected color
  private current?: Color;

  constructor() {}

  ngOnInit(): void {
    // clone initial list of colors to add boolean value
    this._colors = this.colors.map(color => new Color(color));
  }

  public selectNewColor(event: Event): void {
    // save new color value
    const domElem = event.target as HTMLInputElement;
    this.selected = domElem.id;
    this.selectedChange.emit(this.selected);

    // remove stroke on circle of previously selected element
    if (this.current) {
      this.current.isSelected = false;
    }

    // mark new color as selected to get stroke on circle
    this.current = this._colors.find(elem => elem.color == this.selected);
    if (this.current) {
      this.current.isSelected = true;
    }
  }
}
