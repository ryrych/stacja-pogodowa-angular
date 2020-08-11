# Stacja pogodowa / Weather station

![Weather station during afternoon hours][4]

Weather station is a project displaying weather information for Wroclaw city. Data is provided by [OpenWeather](http://openweathermap.org/).

## Process

Process took into account design phase and development phases.

### Design phase

1. Research: similar solutions
2. Information architecture: how to display most important information
3. Paper prototypes: for mobile and tablet devices, vertical and horizontal views
4. Look & feel: layout, typography scale, fonts
5. Detailed screens in Figma

<em>Lato</em> and suplementary <em>Libre Franklin</em> were selected to give the UI lightness and maintain legibility. I chose <em>1.414</em> scale as it perfectly fits for temperature displayed at the top part of the layout.

![Paper prototype][1]
Paper prototypes

![Monochrome scheme][2]
Monochrome version

As background of the widget was supposed to change to a part of the day (morning, afternoon, and evening), the following color schemes were created:

- Morning
- Afternoon
- Evening

![Color schemes][3]

Accessability was taken into account—colors have best possible contrast ratio. Ratio was tested using: [Contrast ratio tool](https://contrast-ratio.com/).

### Development phase

1. Static version (with Webpack)
2. Angular version

While working on the static version, I coded design with <em>SASS</em> spliting the code into modular parts. Finally the project was implemented using <em>Angular 9</em> and deployed to <em>Firebase</em>. For the <em>MVP</em> only mobile version with vertical layout was delivered.

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
[3]: ./docs/colors.png
[4]: ./docs/ui-002-afternoon.png

