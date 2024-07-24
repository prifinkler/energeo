import { useState, useEffect } from 'react';
import axios from 'axios';

import ProgressCircle from '../components/ui/ProgressCircle';
import AutoComplete from '../components/ui/AutoComplete'
import energenius from '../assets/energenius_2.jpeg'

export default function EnerGenius() {
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(energenius);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePlaceSelect = (place) => {
    setLocation(place)
  }

  useEffect(()=>{
    location && getImage()
  },[location])

  async function getImage() {
    setIsLoading(true);
    setError(null);

    try {
      const res = await axios.get(`https://energeo-agent-y2qdisfueq-ew.a.run.app/test?user_input=${location}`, { responseType: 'arraybuffer' });
      console.log(res)
      const blob = new Blob([res.data], { type: 'image/png' });
      const url = URL.createObjectURL(blob);
      setImage(url);
      console.log('Location submitted successfully');
    } catch (error) {
      console.error('Error submitting location: ', error);
      setImage(energenius);
      setError('Failed to generate image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='container-fluid'>
      <h2 className="mb-5 text-center">EnerGenius</h2>
      <div className='row'>
        <div className='col-md-6'>
          {isLoading ? (
            <div className='loading'><ProgressCircle /></div>
          ) : (
            <img src={image} alt="EnerGenius visualization" className='w-100 mb-3'/>
          )}
        </div>
        <div className='col-md-6'>
          <div className='d-flex flex-column'>
            <p>EnerGenius is the next step in our journey to understand and visualise energy use and its environmental impact. While our Dashboard shows how the UK harnesses elemental energies, and the Carbon Intensity map displays real-time emissions across Great Britain, EnerGenius takes a more personalised approach.</p>
            <p>Currently, EnerGenius focuses on weather visualisation. Simply enter a location, and it will generate a visual representation of the current weather conditions at that location. This feature helps you see how elemental forces like wind, sun, and water are at play in specific areas.</p>
            < AutoComplete
              className='mb-5'
              onPlaceSelect={handlePlaceSelect}
            />
            {error && <p>{error}</p>}
            <p>Would you like to see more?</p>
            <p>In the future, EnerGenius will evolve to combine this weather data with energy information. It will help you understand how weather patterns influence energy use and carbon intensity in your chosen location, by looking at historical data and predicting future patterns. By providing visuals, EnerGenius aims to make complex energy and environmental data accessible and actionable, empowering you to make informed decisions about energy use and its impact on our world.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
