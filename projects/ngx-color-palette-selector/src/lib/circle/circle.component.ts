import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {

  @Input() color: string = '';
  @Input() isSelected: boolean = false;

  constructor() { }

}
