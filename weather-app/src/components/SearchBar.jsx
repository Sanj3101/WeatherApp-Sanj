import React, { useState } from 'react';

const SearchBar = ({ onSearch, history }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    if (input.trim() !== '') {
      onSearch(input.trim());
      setInput('');
    }
  };

  return (
    <div className=" font-poppins flex flex-col items-center justify-center w-full px-6 py-2 gap-4 ">
      {/* <div className="flex items-center">
        <h2 className="font-bold text-xl text-white">Weather App</h2>
      </div> */}
      <div className="flex items-center gap-2 w-full max-w-md mx-auto">
        <input type="text" className=" rounded-full w-full px-2 py-1 text-center shadow-md opacity-50 hover:opacity-90 transition-all duration-300 " placeholder="Enter city..." value={input}
          //event handling for search city and press enter
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <span className="material-symbols-outlined cursor-pointer text-white transition-all duration-300 hover:scale-110" onClick={handleSearch}>search</span>
      </div>

      {history?.length > 0 && (
        <div className="mt-2 text-sm text-white flex flex-wrap items-center justify-center gap-2 max-w-md mx-auto">
          {history.map((city, index) => (
            <button key={index} onClick={() => onSearch(city)} className="px-3 py-1 bg-teal-800 rounded-full hover:bg-neutral-200 hover:text-black transition-colors duraation-400 ease-in opacity-60">
              {city}
            </button> //showing past 5 searched for city
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
