import { useState, useEffect } from 'react';
import axios from 'axios';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import energenius from '../assets/energenius.png';

export default function EnerGenius() {
  const [formData, setFormData] = useState({
    input_was: ''
  });
  const [image, setImage] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.get(`https://energeo-live-y2qdisfueq-ew.a.run.app/test?user_input=${formData.input_was}`);
      console.log('Form data submitted successfully:', res.data);
    } catch (error) {
      console.log('Error submitting form: ', error);
    }
  };

  const getImage = async () => {
    try {
      const res = await axios.get('https://energeo-live-y2qdisfueq-ew.a.run.app/geo/image_static', { responseType: 'arraybuffer' });
      const blob = new Blob([res.data], { type: 'image/png' });
      const url = URL.createObjectURL(blob);
      setImage(url);
    } catch (error) {
      console.error('Error getting image:', error);
    }
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div className='container-fluid'>
      <h2 className="mb-5 text-center">EnerGenius</h2>
      <div className='row'>
        <div className='col-md-6'>
          <p>
          EnerGenius is a smart tool that helps you understand energy use and its impact on the environment in real-time. It combines weather information with energy data to create easy-to-understand visuals.
          </p>
          <Stack spacing={2}>
            <TextField
              id="outlined-basic"
              label="Ask Energenius"
              variant="outlined"
              name="input_was"
              onChange={handleChange}
              value={formData.input_was}
              multiline
              rows={4}
              fullWidth
              endIcon={<SendIcon />}
            />
            <Button
              variant="outlined"
              fullWidth
              onClick={handleSubmit}
              disabled
              >Coming Soon!
            </Button>
          </Stack>
        </div>
        <div className='col-md-6'>
          {image && <img src={energenius} alt="Placeholder image" className='w-100'/>}
          {/* {image && <img src={image} alt="Fetched image" className='w-100'/>} */}
        </div>
      </div>
    </div>
  );
}
