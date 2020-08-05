import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  getCurrentWeather() {
    return this.http.get(
      `${environment.apiUrl}/weather?id=3081368&units=metric&&lang=pl&appid=${environment.apiKey}`
    )
  }
}
