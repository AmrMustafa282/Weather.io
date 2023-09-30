

const Forecast = ({ state }) => {

  const forecast = state.forecast.forecastday;

  const getTimes = (time_epoch) => {
    const epochTimestamp = time_epoch * 1000; // Convert to milliseconds
    const date = new Date(epochTimestamp);
    const day = date.toLocaleDateString('en-US', { day: 'numeric' });
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    const monthName = date.toLocaleDateString('en-US', { month: 'short' });
    return{ day , dayName , monthName}
  }




  return (
    <div className="bg-secondary p-8 rounded-3xl text-white">
      <h1 className='text-2xl mb-4'>3 Days Forecast</h1>
      <ul className='flex flex-col pr-12 gap-0 text-gray-500'>
        {forecast.map((d) => (
          <li key={d.date} className='flex justify-between items-center'>


            <div className="flex items-center justify-between font-semibold  ">
            
                <img src={state.current.condition.icon} alt="state-icon"  />
              
              <div className='text-white'>{state.current.temp_c}&deg;</div>
            </div>


            <div>
              {getTimes(d.date_epoch).day}{" "}{getTimes(d.date_epoch).monthName}
            </div>
            <p >{getTimes(d.date_epoch).dayName}</p>
         </li>
        ))}
      </ul>
    </div>
  )
}

export default Forecast