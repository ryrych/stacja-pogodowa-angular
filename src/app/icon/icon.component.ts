import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() icon: string

  constructor() {}

  iconPath() {
    return `assets/images/weather-icons/wi-${this.icon}.svg`
  }

  ngOnInit(): void {}
}
