# WeatherSense

WeatherSense is a Single Page Application (SPA) that provides accurate weather forecasts based on the user's location.

## Updates

![last-updated UI](<public/Screenshot 1.png>)

## Features

- Automatically detects user location to provide weather forecasts.
- Displays current weather conditions, temperature, humidity, wind speed, and more.
- Provides a 7-day weather forecast for the user's location.
- Responsive design for use on desktop and mobile devices.

## Technologies Used

- React.js for the frontend UI.
- Tailwind CSS for styling.
- OpenWeatherMap API for weather data.
-

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/WeatherSense.git
   ```
2. Navigate to the project directory:
   ```bash
   cd WeatherSense
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:5173` to view the application.

## Configuration

To configure the OpenWeatherMap API key, create a `.env` file in the root of the project and add your API key:

```dotenv
REACT_APP_API_KEY=your_openweathermap_api_key_here
```

## Folder Structure

```
WeatherSense/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   └── ...
│   │   └── styles/
│   │       └── ...
│   ├── components/
│   │   ├── Header.js
│   │   ├── WeatherCard.js
│   │   └── ...
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Forecast.js
│   │   └── ...
│   ├── services/
│   │   └── WeatherAPI.js
│   ├── utils/
│   │   ├── helpers.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md
```

## Contributing

Contributions are welcome!
