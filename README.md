# EnerGeo

EnerGeo is a React-based web application that visualises real-time energy sourcing and environmental impact data. Built during a hackathon under the theme "Earth, Fire, Air, Water and Air - Where Does our Energy Comes From?", this project aims to promote sustainable practices and environmental awareness through interactive data visualisations.

## Table of Contents

- [Project Team](#project-team)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Libraries and APIs](#libraries-and-apis)
- [EnerGeo Backend GitHub Repository](#backend-repo)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

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

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgements

- Data provided by National Grid ESO and Elexon
- Weather data provided by the Met Office
