# 🌤️ React Weather App

A clean, modern, and responsive weather dashboard built with **React.js** and **Tailwind CSS**, featuring real-time weather data from OpenWeatherMap API. Users can search for any city to view the current weather, including temperature, humidity, wind speed, and conditions, alongside a 5-day forecast and optional dark mode support.

## 🚀 Live Demo

👉 [View the live app here](https://weather-app-sanj.vercel.app/)

## 📁 GitHub Repository

👉 [GitHub Repo](https://github.com/Sanj3101/WeatherApp-Sanj)

---

## 📚 Tech Stack

| Technology       | Usage                                   |
|------------------|-----------------------------------------|
| **React.js**           | Core framework                    |
| **Tailwind CSS**       | Styling and responsive design     |
| **OpenWeatherMap API** | Real-time weather data            |
| **React Hooks**        | State & effect management         |
| **Vercel**             | Deployment                        |

---

## ✨ Features

### ✅ Core Features

- 🔍 **Search by City**: Enter any city name to get real-time weather.
- 📦 **Weather Info Card**:
  - City Name
  - Current Temperature (°C)
  - Weather Condition (e.g., Sunny, Rainy)
  - Humidity (%)
  - Wind Speed (km/h)
  - Weather Icon
- ⏳ **Loading State**: Visually indicates data fetching.
- ❌ **Error Handling**:
  - Invalid city name
  - API/network failure

### 🌟 Bonus Features

- 📅 **5-Day Forecast**: Weather trends at 3-hour intervals.
- 🌓 **Dark/Light Theme Toggle**: Seamless UI experience.
- 🔁 **Refresh Button**: Re-fetch data for the current city.
- 📜 **Recent Searches**: View the last 5 cities searched.

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/WeatherApp-Sanj-.git
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API Key**

   Create a `.env` file in the root of the project and add:

   ```
   VITE_API_KEY=your_openweathermap_api_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

---

## 🌐 API Integration

This project uses the [OpenWeatherMap API](https://openweathermap.org/api):

### 🔗 API Endpoints

- **Current Weather Data**  
  `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric`

- **5-Day Forecast Data**  
  `https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric`

### ⚠️ Notes

- Requires a free API key (register [here](https://openweathermap.org/api))
- Limited to **60 API calls/minute** on free tier

---

## 📱 Responsiveness

- Mobile-first responsive layout
- Optimized for all screen sizes using Tailwind utility classes

---

## 📦 Deployment

Deployed on **[Vercel](https://vercel.com/)**:

- No login required to access
- Opens directly to the weather dashboard

---

## 🙌 Author

**Sanjana Biswas**  
Frontend Developer  
[Portfolio](https://portfolio-liard-seven-16.vercel.app/) | [LinkedIn](www.linkedin.com/in/sanjana783)
