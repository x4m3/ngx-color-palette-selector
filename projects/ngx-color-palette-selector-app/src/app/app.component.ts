import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public selected = 'selected color will be here';

  private nbColors = 10;
  private static generateColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  ngOnInit() {
    if (this.colors.length === 0) {
      this.colors = Array(this.nbColors).fill(0).map(_ => AppComponent.generateColor());
    }
  }

  // Generate random colors
  public colors: string[] = [];

  // Use preset of colors
  // public colors: string[] = [
  //   '#B4AFF2',
  //   '#F87D7D',
  //   '#5092FC',
  //   '#DF18D8',
  //   '#D41101',
  //   '#AC9AAF',
  //   '#2D6108',
  //   '#ABBF3C',
  //   '#3189A6',
  //   '#F96E61',
  // ];

}
