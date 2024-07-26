# EnerGeo

Welcome to the frontend of [Energeo](https://energeo.dev/), a React-based web application designed to visualize real-time energy sourcing and environmental impact data. Our goal is to promote sustainable practices and raise awareness through interactive graphs and images. EnerGeo was developed during a hackathon themed "Earth, Fire, Air, Water - Where does our energy come from?". By integrating MLOps, Cloud, and AI technologies, EnerGeo channels data from various APIs and leverages advanced LLM-based technologies. We aspire to provide users with a comprehensive tool that facilitates a direct and easier understanding of the environmental impact of energy sources, and our unique take is classifying them into the four aforementioned elements. Currently EnerGeo offers visualizations of historical consumption levels in the UK (last 30 minutes and last 24 hours) and features an AI image generator that provides real-time visualizations of weather conditions in any location around the world.

## Table of Contents

- [Project Team](#project-team)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Libraries and APIs](#libraries-and-apis)
- [EnerGeo Backend GitHub Repository](#enerGeo-backend-gitHub-repository)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Data Sources](#data-sources)
- [Acknowledgements](#acknowledgements)
- [Contributing](#contributing)

## Project Team

- Frontend Engineer:
  - [Priscila Finkler Innocente](https://github.com/prifinkler)

- Data Scientists:
  - [Aryavachin Márquez Briceño](https://github.com/cipobt)
  - [Louis Auger](https://github.com/JammyNinja)

## Key Features

- Real-time energy sourcing dashboard
- Interactive carbon intensity map
- Weather visualisation with EnerGenius
- Responsive design for various screen sizes

## Tech Stack

![React](https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

## Libraries and APIs

![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=Leaflet&logoColor=white)
![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![GeoJSON](https://img.shields.io/badge/GeoJSON-5A5A5A?style=for-the-badge&logo=geojson&logoColor=white)
![MapTiler](https://img.shields.io/badge/MapTiler-00AACC?style=for-the-badge&logo=maptiler&logoColor=white)
![React Google Autocomplete](https://img.shields.io/badge/React_Google_Autocomplete-4285F4?style=for-the-badge&logo=google&logoColor=white)

## EnerGeo Backend GitHub Repository

[EnerGeo Backend](https://github.com/JammyNinja/EnerGeo_API)

## Getting Started

### Prerequisites

Before proceeding with the installation, make sure you have the following installed:

- Node.js: version 18.x or higher
- npm: version 7.x or higher

### Installation Steps

1. Clone the repository:

```javascript
git clone https://github.com/yourusername/energeo.git
```

2. Navigate to the project directory:

```javascript
cd energeo
```

3. Install dependencies:

```javascript
npm install
```

4. Create a `.env` file in the root directory and add your [Google Maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key):

```javascript
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

5. Start the development server:

```javascript
npm run dev
```

6. Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).

## Project Structure

- `src/`: Contains the source code for the application
- `components/`: Reusable React components
- `pages/`: Main page components
- `styles/`: CSS files
- `utils/`: Utility functions and constants
- `assets/`: Static assets like images
- `public/`: Public assets

## Key Components

- Dashboard: Visualises energy sourcing data
- Carbon Intensity Map: Displays real-time carbon intensity across Great Britain
- EnerGenius: Weather visualisation tool

## Data sources

### Live Data

##### Current UK energy generation:
Elexon provide an API that offers data about the UK energy network.
 - [Elexon API docs](https://bmrs.elexon.co.uk/api-documentation/introduction)
 - [Endpoint in use](https://data.elexon.co.uk/bmrs/api/v1/generation/actual/per-type/day-total?format=json)

##### Carbon intensity
The [carbon intensity](https://carbonintensity.org.uk/) forecast API is made by National Grid ESO, in partnership with the Environmental Defense Fund Europe, University of Oxford, and WWF.
 - [Carbon Intensity API docs](https://carbon-intensity.github.io/api-definitions/#carbon-intensity-api-v2-0-0).
 - [Endpoint in use](https://api.carbonintensity.org.uk/regional)
 - [Carbon intensity regional forecast methodology PDF](https://github.com/carbon-intensity/methodology/raw/master/Regional%20Carbon%20Intensity%20Forecast%20Methodology.pdf)

##### Solar generation
We use solar energy generation forecast data provided by [University of Sheffield solar](https://www.solar.sheffield.ac.uk/). We get solar generation forecast by PES region.
- [API documentation](https://api.solar.sheffield.ac.uk/pvlive/docs)
- [API endpoint for national solar output](https://api.solar.sheffield.ac.uk/pvlive/api/v4/pes/0)

##### Weather Data
We query a free [weather API](https://www.weatherapi.com/) for current weather data in a specified location.

### Static Data

##### Historic energy generation data
We downloaded a publicly available file from National Grid ESO's [data portal](https://www.nationalgrideso.com/data-portal). Contains data up to 17th July 2024. Find link to current document below.
- [Historic data page](https://www.nationalgrideso.com/data-portal/historic-generation-mix)
- [Historical data file download](https://api.nationalgrideso.com/dataset/88313ae5-94e4-4ddc-a790-593554d8c6b9/resource/f93d1835-75bc-43e5-84ad-12472b180a98/download/df_fuel_ckan.csv)

#### UK Energy Regions
Also from national grid data portal is a GeoJSON file that contains the coordinates of UK regions. We use regions current at May 2024.
 - [Region boundaries page](https://www.nationalgrideso.com/data-portal/gis-boundaries-gb-dno-license-areas)
 - [GeoJSON file download](https://api.nationalgrideso.com/dataset/0e377f16-95e9-4c15-a1fc-49e06a39cfa0/resource/1c6a7dc0-1b6c-443a-bc67-5f7125649434/download/gb-dno-license-areas-20240503-as-geojson.geojson)


## Acknowledgements
- [Andrew Crossland, PhD](https://linkedin.com/in/afcrossland/) inspired our project with his real-time web-based tool, mygridgb.co.uk, and offered us constant support and encouragement throughout the hackathon.
- [Anna Putt](https://linkedin.com/in/anna-putt/) for organizing the MentorMe initiative and its first hackathon, "Earth, Fire, Air, Water - Where Does Our Energy Come From?", and [Ben Fairbairn](https://linkedin.com/in/benfairbairn/) for coming up with the theme. We had the honour of winning the hackathon with this project!
- [Le Wagon - London](https://www.lewagon.com/london) trained us and provided an excellent co-working space in the heart of London for the duration of the hackathon.


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
