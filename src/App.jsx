import { useState, useEffect } from 'react';
import bgdesktop from './assets/images/pattern-bg-desktop.png';
import './App.css';
import './index.css';
import SearchBar from './components/SearchBar';
import InfoCard from './components/InfoCard';
import MapComponent from './components/MapComponent';


function App() {
  const [ipData, setIpData] = useState(null);

  // Function to fetch IP Geolocation Data
  const fetchIPLocation = async (ip = '') => {
    const API_KEY = import.meta.env.VITE_IPIFY_API_KEY; // Replace with your actual API key
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setIpData(data);
    } catch (error) {
      console.error('Error fetching IP data:', error);
    }
  };

  // Function to get the user's own IP and fetch location on initial load
  useEffect(() => {
    const getOwnIP = async () => {
      try {
        const response = await fetch('https://api64.ipify.org?format=json');
        const data = await response.json();
        fetchIPLocation(data.ip); // Fetch location data for user's IP
      } catch (error) {
        console.error('Error fetching own IP:', error);
      }
    };
    
    getOwnIP(); // Run function on initial load
  }, []);

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <img src={bgdesktop} alt="bgdesktop" />
        <h1 className='text-white text-3xl font-bold absolute top-10'>IP Address Tracker</h1>
        <SearchBar fetchIPLocation={fetchIPLocation} />
        {ipData && <InfoCard ipData={ipData} />}
        <MapComponent ipData={ipData} />
      </div>
    </>
  );
}

export default App;
