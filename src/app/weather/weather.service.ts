import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { WeatherAdapter } from './weather.model'

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private baseUrl = environment.apiUrl

  constructor(private http: HttpClient, private adapter: WeatherAdapter) {}
  getCurrentWeather(): any {
    const url = `${this.baseUrl}/weather?id=3081368&units=metric&&lang=pl&appid=${environment.apiKey}`
    return this.http.get(url)
  }
}
