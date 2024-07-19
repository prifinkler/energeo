import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';

import ProgressCircle from '../components/ui/ProgressCircle';
import energenius from '../assets/energenius.png';
import Autocomplete from "react-google-autocomplete";
import TextField from '@mui/material/TextField';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const AutocompleteInput = React.forwardRef((props, ref) => {
  return <Autocomplete {...props} ref={ref} />;
});

AutocompleteInput.displayName = 'AutocompleteInput';

export default function EnerGenius() {
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(energenius);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const locationRef = useRef(location);

  const debouncedGetImage = useRef(debounce(getImage, 300)).current;

  useEffect(() => {
    if (location && location !== locationRef.current) {
      locationRef.current = location;
      debouncedGetImage();
    }
    return () => {
      debouncedGetImage.cancel();
    };
  }, [location, debouncedGetImage]);

  async function getImage() {
    setIsLoading(true);
    setError(null);

    try {
      const res = await axios.get(`https://energeo-agent-y2qdisfueq-ew.a.run.app/test?user_input=${encodeURIComponent(location)}`, { responseType: 'arraybuffer' });
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
      <p>EnerGenius is the next step in our journey to understand and visualise energy use and its environmental impact. While our Dashboard shows how the UK harnesses elemental energies, and the Carbon Intensity map displays real-time emissions across Great Britain, EnerGenius takes a more personalised approach.</p>
      <div className='row'>
        <div className='col-md-6'>
          <div className='d-flex flex-column'>
            <p>Currently, EnerGenius focuses on weather visualisation. Simply enter a location, and it will generate a visual representation of the current weather conditions. This feature helps you see how elemental forces like wind, sun, and water are at play in specific areas.</p>
            <p>In the future, EnerGenius will evolve to combine this weather data with energy information. It will help you understand how weather patterns influence energy use and carbon intensity in your chosen location. By providing visuals, EnerGenius aims to make complex energy and environmental data accessible and actionable, empowering you to make informed decisions about energy use and its impact on our world.</p>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Enter a location"
              variant="outlined"
              style={{ marginBottom: "20px" }}
              InputProps={{
                inputComponent: AutocompleteInput,
                inputProps: {
                  apiKey: GOOGLE_MAPS_API_KEY,
                  onPlaceSelected: (place) => {
                    setLocation(place.formatted_address);
                  },
                  placeholder: "",
                },
              }}
            />
            {error && <p style={{color: 'red'}}>{error}</p>}
          </div>
        </div>
        <div className='col-md-6'>
          {isLoading ? (
            <div className='loading'><ProgressCircle /></div>
          ) : (
            <img src={image} alt="EnerGenius visualization" className='w-100'/>
          )}
        </div>
      </div>
    </div>
  );
}
