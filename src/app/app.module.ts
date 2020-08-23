import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { DateFnsModule } from 'ngx-date-fns'

import { routes } from './routes'
import { AppComponent } from './app.component'
import { WeatherService } from './weather/weather.service'
import { WeatherComponent } from './weather/weather.component'
import { ButtonComponent } from './button/button.component'
import { IconComponent } from './icon/icon.component'
import { MeasureComponent } from './measure/measure.component'

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ButtonComponent,
    IconComponent,
    MeasureComponent,
  ],
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
