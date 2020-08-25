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
    this.weather = Weather.empty()
  }

  ngOnInit(): void {
    this.getWeather()
    interval(1000 * 5).subscribe(() => this.getWeather())
  }

  getWeather() {
    this.weatherService.currentWeather().subscribe((data: any) => {
      this.weather = this.adapter.adapt(data)
    })
  }

  minMaxTemp(): string {
    let min = Math.round(this.weather.temperature.min)
    let max = Math.round(this.weather.temperature.max)

    if (min == max) {
      return min + ''
    }

    return `${min}–${max}`
  }

  private getDatetime() {
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
