import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { WeatherAdapter } from './weather.model'

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient, private adapter: WeatherAdapter) {}

  private cityIds = {
    wroclaw: 3081368,
  }

  private findCityId(name: string): number {
    return this.cityIds['wroclaw']
  }

  currentWeather(): any {
    return this.http.get(this.getUrl('weather'))
  }

  private getUrl(path: string): string {
    return `${environment.apiUrl}/${path}${this.getParams()}`
  }

  private getParams(): string {
    return `?id=${this.findCityId('wroclaw')}&units=metric&lang=pl&appid=${
      environment.apiKey
    }`
  }
}
