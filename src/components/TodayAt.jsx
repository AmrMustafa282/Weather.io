
import { useEffect, useState } from 'react';
import HoureCard from './HoureCard'

const TodayAt = ({ state }) => {


  // const houres = state.forecast.forecastday[0].hour

  const epochTime = state.location.localtime_epoch * 1000;
  const date = new Date(epochTime);
  const hour = date.getHours();







  return (
    <>
      {/* <h1 className='text-white text-2xl '>Today at</h1> */}
      <div className=' hidden  md:flex justify-center  2xl:justify-between 2xl:gap-0 gap-4 items-center'>

        <HoureCard subState={state.forecast.forecastday[0].hour[(hour + 1 >= 24) ? hour + 1 - 24 : hour]} />
        <HoureCard subState={state.forecast.forecastday[0].hour[(hour + 3 >= 24) ? hour + 3 - 24 : hour + 3]} />
        <HoureCard subState={state.forecast.forecastday[0].hour[(hour + 6 >= 24) ? hour + 6 - 24 : hour + 6]} />
        <HoureCard subState={state.forecast.forecastday[0].hour[(hour + 9 >= 24) ? hour + 9 - 24 : hour + 9]} />
        <HoureCard subState={state.forecast.forecastday[0].hour[(hour + 12 >= 24) ? hour + 12 - 24 : hour + 12]} />
        <HoureCard subState={state.forecast.forecastday[0].hour[(hour + 15 >= 24) ? hour + 15 - 24 : hour + 15]} />
        <HoureCard subState={state.forecast.forecastday[0].hour[(hour + 18 >= 24) ? hour + 18 - 24 : hour + 18]} />
        <HoureCard subState={state.forecast.forecastday[0].hour[(hour + 21 >= 24) ? hour + 21 - 24 : hour + 21]} />
      </div>
      <div className=' hidden  sm:flex md:hidden justify-center  2xl:justify-between 2xl:gap-0 gap-4 items-center'>

        <HoureCard subState={state.forecast.forecastday[0].hour[(hour + 3 >= 24) ? hour + 3 - 24 : hour + 3]} />
        <HoureCard subState={state.forecast.forecastday[0].hour[(hour + 6 >= 24) ? hour + 6 - 24 : hour + 6]} />
        <HoureCard subState={state.forecast.forecastday[0].hour[(hour + 9 >= 24) ? hour + 9 - 24 : hour + 9]} />
        <HoureCard subState={state.forecast.forecastday[0].hour[(hour + 12 >= 24) ? hour + 12 - 24 : hour + 12]} />
        <HoureCard subState={state.forecast.forecastday[0].hour[(hour + 15 >= 24) ? hour + 15 - 24 : hour + 15]} />
        <HoureCard subState={state.forecast.forecastday[0].hour[(hour + 18 >= 24) ? hour + 18 - 24 : hour + 18]} />
      </div>
      <div className=' flex sm:hidden  justify-evenly 2xl:justify-between 2xl:gap-0 gap-4 items-center'>
        <HoureCard subState={state.forecast.forecastday[0].hour[(hour + 3 >= 24) ? hour + 3 - 24 : hour + 3]} />
        <HoureCard subState={state.forecast.forecastday[0].hour[(hour + 9 >= 24) ? hour + 9 - 24 : hour + 9]} />
        <HoureCard subState={state.forecast.forecastday[0].hour[(hour + 15 >= 24) ? hour + 15 - 24 : hour + 15]} />
        <HoureCard subState={state.forecast.forecastday[0].hour[(hour + 21 >= 24) ? hour + 21 - 24 : hour + 21]} />
      </div>
    </>
  )
}

export default TodayAt