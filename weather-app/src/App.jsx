import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

function App() {
  const [city, setCity] = useState(null);
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle('dark-mode', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };
  
  useEffect(() => {
    const storedCity = localStorage.getItem('lastCity');
    const storedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    const storedTheme = localStorage.getItem('theme');

    if (storedCity) setCity(storedCity);
    if (storedHistory) setHistory(storedHistory);
    if (storedTheme === 'dark') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const handleSearch = (newCity) => {
    setCity(newCity);
    localStorage.setItem('lastCity', newCity);

    const updatedHistory = [newCity, ...history.filter(c => c !== newCity)].slice(0, 5);
    setHistory(updatedHistory);
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  };

  return (
    <div className={`${darkMode && "dark"}`}>
    <div className="min-h-screen w-full flex flex-col items-center lg:justify-center opacity-75">
      <div className="flex flex-col gap-2 items-center mt-10">
        <span className="material-symbols-outlined cursor-pointer text-white transition-all duration-300 hover:scale-150 ease-in-out" onClick={toggleDark}>{darkMode ? "sunny" : "bedtime" }</span>
        <SearchBar onSearch={handleSearch} history={history} />
        <WeatherCard city={city} />
      </div>
    </div>
    {/* <button className="absolute w-16 h-16 bottom-16 right-16 rounded-full bg-neutral-500 dark:bg-white text-white dark:text-black font-semibold"
    onClick={toggleDark}>{darkMode ? "lght":"drk"}</button> */}
    </div>
  );
}

export default App;
// dark:bg-gray-900