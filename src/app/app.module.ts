import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { DateFnsModule } from 'ngx-date-fns'
import { pl } from 'date-fns/locale'
// import { DateFnsConfigurationService } from '../lib/src/date-fns-configuration.service'

import { routes } from './routes'
import { AppComponent } from './app.component'
import { WeatherService } from './weather/weather.service'
import { WeatherComponent } from './weather/weather.component'

@NgModule({
  declarations: [AppComponent, WeatherComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    DateFnsModule.forRoot(),
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
