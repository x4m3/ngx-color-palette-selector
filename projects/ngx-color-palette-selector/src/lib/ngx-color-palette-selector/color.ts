export class Color {
  /// color can in be in rgb, hex...
  color: string;

  /// to show stroke around circle if selected
  isSelected: boolean;

  constructor(color: string) {
    this.color = color;
    this.isSelected = false;
  }
}

