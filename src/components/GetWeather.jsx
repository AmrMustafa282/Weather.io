import axios from 'axios';
import { useEffect, useState } from 'react';
import logoImg from "../assets/logo.png";
import Now from './Now';
import Forecast from './Forecast';
import Todays from './Todays';
import TodayAt from './TodayAt';
import Cities from './Cities';
import { Spinner } from '@material-tailwind/react';
// import {  CircularProgress } from '@mui/material';






const GetWeather = () => {

  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);
  const [subLoading, setSubLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [ip, setIp] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  // const [getCity, setGetCity] = useState('');
  const [city, setCity] = useState('');





  const getMyIp = () => {
    axios.get('https://api.ipify.org?format=json')
      .then(data => setIp(data.data.ip))
      .catch(error => console.log(error));
  }

  const getLatLong = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported in this browser");
    }
  }

  const showThisCity = (city) => {
    setCity(city);
  }

  const forecastWeather = (country = (latitude && longitude) ? `${latitude} , ${longitude}` : ip) => {
    setSubLoading(true);
    setLoading(true);
    const options = {
      method: 'GET',
      url: import.meta.env.VITE_REACT_APP_API_URL,
      params: {
        q: country,
        days: '3',

      },
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_REACT_APP_HOST
      }
    };
    axios
      .request(options)
      .then(response => {
        console.log(response.data);
        setState(response.data);
        setLoading(false);
        setSubLoading(false);
      })
      .catch(error => {
        // setError(error);
        console.log(error)
        setLoading(false);
        setSubLoading(false);
      });
  };

  useEffect(() => {
    getLatLong();
    getMyIp();
    // console.log(axios.get('https://api.ipify.org?format=json').then(data=> console.log(data.data.ip)))
  }, [])
  useEffect(() => {
    city ? forecastWeather(city) : (latitude && longitude) ? forecastWeather() : ip ? forecastWeather() : null
  }, [city, latitude, longitude, ip])




  return (
    <div className='bg-primary min-h-screen'>
      <div className='px-24 mx-auto '>
        <div>
          {/* <Navbar /> */}

          <nav className=' flex justify-between items-end py-8'>
            <div className='h-[48px]'>
              <img src={logoImg} alt="logo" className='h-full' />
            </div>
            <div className='shadow-lg bg-secondary border-none outline-none text-white flex justify-center items-center rounded-[58px] border w-[50%] h-[48px]'>
              <span className='pr-4 '>
                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" fill='white' viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
              </span>
              <input type='text' className='bg-secondary  w-[88%] focus:outline-none h-[50%] px-1 '
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <span className='pl-4'>
                {subLoading
                  ?
                  <Spinner />
                  :
                  <Spinner className='opacity-0'/>
                }
              </span>
            </div>
            <div className='flex justify-center items-center '>
              <button className=' bg-[#B9A4E7] py-3 px-5 rounded-full flex justify-center items-center gap-2'
                onClick={() => setCity('')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512">
                  <path d="M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" /></svg>
                <p className='font-semibold cursor-pointer '>Current Location</p>
              </button>

            </div>
          </nav>

          {state
            ?
            <>
              <main className='grid grid-cols-1 2xl:grid-cols-4 gap-12  '>
                <div className='col-span-1 bg-primary flex flex-col gap-12'>
                  <Now state={state} />
                  <Forecast state={state} />
                  <Cities state={state} showThisCity={showThisCity} />
                </div>
                <div className='col-span-3  flex flex-col gap-6'>
                  <Todays state={state} />
                  <TodayAt state={state} />
                </div>
              </main>


            </>
            :
            <Spinner className='mx-auto ' />

          }


        </div>
      </div>
    </div>
  )
}

export default GetWeather