
import AirCard from './AirCard'

import HumIcon from "../assets/hum.png"
import PreIcon from "../assets/pre.png"
import VisIcon from "../assets/vis.png"
import FelsIcon from "../assets/temp.png"

import sunrise from "../assets/sun.png"
import sunset from "../assets/moon.png"

import wind from "../assets/wind.png"


const Todays = ({ state }) => {
  return (
    <div className="bg-secondary p-8 rounded-3xl text-white">
        <h1 className='text-white text-2xl mb-4'>Todays Highlights</h1>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>


        <div className='col-span-2 bg-middle p-4 lg:p-8 rounded-lg'>
          <p className='text-gray-500'>Air Quality Index</p>
          <div className='lg:mt-10 mt-4  flex justify-around items-center'>
            <img src={wind} alt="" className='lg:w-14 lg:h-14 w-8 h-8' />
              <div>
              <p className='text-gray-500 text-sm lg:text-md text-center mb-2'>Wind</p>
              <h2 className='text-2xl lg:text-4xl mt-4'>{state.current.wind_kph}<span className='  text-sm lg:text-2xl'>km/h</span> </h2>
            </div>
            <div>
              <p className='text-gray-500 text-sm lg:text-md text-center mb-2'>Cloud</p>
              <h2 className='text-2xl lg:text-4xl mt-4'>{state.current.cloud}<span className='  text-sm lg:text-2xl'>%</span></h2>
            </div>
            <div>
              <p className='text-gray-500 text-sm lg:text-md text-center mb-2'>Gust</p>
              <h2 className='text-2xl lg:text-4xl mt-4'>{state.current.gust_kph}<span className='  text-sm lg:text-2xl'>km/h</span></h2>
            </div>
            <div>
              <p className='text-gray-500 text-sm lg:text-md text-center mb-2'>UV</p>
              <h2 className='text-2xl lg:text-4xl mt-4'>{state.current.uv}<span className='  text-sm lg:text-2xl'>%</span></h2>
              </div>
              
            
            
          </div>
        </div>


        <div className='col-span-2 bg-middle p-4 lg:p-8 rounded-lg'>
          <p className='text-gray-500'>Sunrise & Sunset</p>
          <div className='flex gap-16 items-center lg:mt-10 mt-4'>

            <div className='flex gap-4 lg:gap-8 items-center '>
              <div>
                <img src={sunrise} alt="Icon" className='hidden lg:block lg:w-12 lg:h-12 w-8 h-8'/> 
              </div>
              <div>
                <p className='text-gray-500 '>Sunrise</p>
                <h1 className='text-2xl lg:text-4xl mt-4 '>{state.forecast.forecastday[0].astro.sunrise}</h1>
              </div>
            </div>

            <div className='flex gap-4 lg:gap-8 items-center '>
              <div>
                <img src={sunset} alt="Icon" className='hidden lg:block lg:w-12 lg:h-12 w-8 h-8' />
              </div>
              <div>
                <p className='text-gray-500 '>Sunset</p>
                <h1 className='text-2xl lg:text-4xl mt-4 '>{state.forecast.forecastday[0].astro.sunset}</h1>
              </div>
            </div>

          </div>
        </div>

        <div className='bg-middle p-4 lg:p-8 rounded-lg hover:scale-105 duration-200'>
          <AirCard text={"Humidity"} val={state.current.humidity} valDeg={'%'} icon={HumIcon} />
        </div>
        <div className='bg-middle p-4 lg:p-8 rounded-lg hover:scale-105 duration-200'>
          <AirCard text={"Pressure"} val={state.current.pressure_mb} valDeg={'hPa'} icon={PreIcon} />
        </div>
        <div className='bg-middle p-4 lg:p-8 rounded-lg hover:scale-105 duration-200'>
          <AirCard text={"Visibility"} val={state.current.vis_km} valDeg={'km'} icon={VisIcon} />
        </div>
        <div className='bg-middle p-4 lg:p-8 rounded-lg hover:scale-105 duration-200'>
          <AirCard text={"Fells Like"} val={state.current.feelslike_c} valDeg={"\u00B0C"} icon={FelsIcon} />
        </div>
      </div>
    </div>
  )
}

export default Todays