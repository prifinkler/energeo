import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css'
import * as bootstrap from 'bootstrap'
import NavBar from './components/NavBar'
import CarbonIntensity from './pages/CarbonIntensity'
import Dashboard from './pages/Dashboard'
import EnerGenius from './pages/EnerGenius'
import About from './pages/About'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: [
      "Poppins",
    ].join(','),
  },
});

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = 'https://energeo-agent-y2qdisfueq-ew.a.run.app/current'

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      console.error('Error fetching energy data:', error);
      setError('Failed to fetch data. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData()
    // const intervalId = setInterval(fetchData, 5 * 60 * 1000)
    // return () => clearInterval(intervalId)
  }, [])

  return (
    <Router>
        <ThemeProvider theme={theme} >
          <NavBar />
          <main className="main-content">
            <div className='bg-grads'>
              <div className="big-circle circle-1"></div>
              <div className="big-circle circle-2"></div>
            </div>
            <Routes>
              <Route path="/" element={<Dashboard data={data}/>} />
              <Route path="/carbonintensity" element={<CarbonIntensity />} />
              <Route path="/energenius" element={<EnerGenius />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </ThemeProvider>
    </Router>
  );
}

export default App
