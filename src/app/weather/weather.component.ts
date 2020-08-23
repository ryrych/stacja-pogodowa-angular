import { Component, OnInit } from '@angular/core'
import { interval } from 'rxjs'
import { Weather, WeatherAdapter } from './weather.model'

import { WeatherService } from './weather.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weather: Weather
  constructor(
    private weatherService: WeatherService,
    private adapter: WeatherAdapter
  ) {
    this.weather = this.createPlaceholderWeather()
  }

  ngOnInit(): void {
    this.getWeather()
    interval(1000 * 5).subscribe(() => this.getWeather())
  }

  createPlaceholderWeather(): Weather {
    return new Weather(
      'Wroclaw',
      new Date(),
      '',
      {
        current: 0,
        feelsLike: 0,
        min: 0,
        max: 0,
      },
      0,
      0,
      0,
      '–'
    )
  }

  getWeather() {
    this.weatherService.getCurrentWeather().subscribe((data: any) => {
      this.weather = this.adapter.adapt(data)
    })
  }

  getDatetime() {
    const calculationHour = this.weather.date.getHours()
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

  widgetTheme() {
    return `c-weather--${this.getDatetime()}`
  }
}
