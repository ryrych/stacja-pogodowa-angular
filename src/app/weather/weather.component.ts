import { Component, OnInit } from '@angular/core'
import { interval } from 'rxjs'
import { fromUnixTime } from 'date-fns'

import { WeatherService } from './weather.service'

type WeatherData = {
  dt: number
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  public currentWeather: any
  public weatherDate: Date
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather()
    interval(1000 * 5).subscribe(() => this.getWeather())
  }

  getWeather() {
    this.weatherService.getCurrentWeather().subscribe((data: WeatherData) => {
      this.currentWeather = data
      this.weatherDate = fromUnixTime(data.dt)
    })
  }

  getDatetime() {
    const calculationHour = this.weatherDate.getHours()
    let time

    if (calculationHour < 12) {
      time = 'morning'
    } else if (calculationHour < 18) {
      time = 'afternoon'
    } else {
      time = 'night'
    }

    return time
  }

  getIcon() {
    return `http://openweathermap.org/img/wn/${this.currentWeather?.weather[0].icon}@4x.png`
  }

  getTheme() {
    return `c-weather--${this.getDatetime()}`
  }
}
