# Stacja pogodowa / Weather station

Weather station is a project displaying weather information for Wroclaw city. Data is provided by [OpenWeater](http://openweathermap.org/).

## Process

After creating information architecture, I planned UI on paper wireframes.

![Paper prototype][1]

Detailed screens were created in Figma. <em>Lato</em> and suplementary <em>Libre Franklin</em> were selected to give the UI lightness and maintain legibility.

![Monochrome scheme][2]

As background of the widget changes according to a part of the day (morning, afternoon, and evening), I created three color schemes:

- Morning
- Afternoon
- Evening

![Color schemes][6]

Colors have best possible contrast ratio. Ratio was tested using: [Contrast ratio tool](https://contrast-ratio.com/).

![Morning][3]
![Afternoon][4]
![Evening][5]

Finally the project was implemented using <em>Angular 9</em> and deployed to <em>Firebase</em>.

Visit the project: https://stacja-pogodowa-dbadd.web.app/

## Development notes

### Installation

```
nvm use --lts --default
npm i
ng serve --open
```

### Prod

```
ng build --prod --aot
ng deploy
```

[1]: ./docs/paper-wireframes.jpg
[2]: ./docs/ui-001-monochrome.png
[3]: ./docs/ui-002-morning.png
[4]: ./docs/ui-003-afternoon.png
[5]: ./docs/ui-004-night.png
[6]: ./docs/colors.png
