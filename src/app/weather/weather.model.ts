import { Injectable } from '@angular/core'
import { Adapter } from './adapter'
import { fromUnixTime } from 'date-fns'

export class Weather {
  constructor(
    public cityName: string,
    public date: Date,
    public iconUrl: string,
    public temperature: {
      current: number
      feelsLike: number
      min: number
      max: number
    },
    public humidity: number,
    public pressure: number,
    public clouds: number,
    public description: string
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class WeatherAdapter implements Adapter<Weather> {
  adapt(data: any): Weather {
    return new Weather(
      data.name,
      fromUnixTime(data.dt),
      `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
      {
        current: data.main.temp,
        feelsLike: data.main.feels_like,
        min: data.main.temp_min,
        max: data.main.temp_max,
      },
      data.main.humidity,
      data.main.pressure,
      data.clouds.all,
      data.weather[0].description
    )
  }
}
