

const Now = ({ state }) => {

  const epochTimestamp = state.location.localtime_epoch * 1000; // Convert to milliseconds
  const date = new Date(epochTimestamp);

  const day = date.toLocaleDateString('en-US', { day: 'numeric' });
  const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
  const monthName = date.toLocaleDateString('en-US', { month: 'long' });


  const lastUpdated = state.current.last_updated;

  const rex = /(\d{2}:\d{2})$/;

  // Use the match method to extract the time from the string
  const rs = lastUpdated.match(rex);



  return (
    <div className="bg-secondary p-8 rounded-3xl text-white">
      <div className="flex flex-col ">
        <div className="">
          <h1 className="text-2xl">Now</h1>
          {/* <p>last update: {rs[1]}</p> */}
        </div>
        <div className="flex gap-6 items-center justify-between text-5xl mt-3">
          <div>{state.current.temp_c}&deg;C</div>
          <div>
            <img src={state.current.condition.icon} alt="state-icon" className="scale-150" />
          </div>
        </div>
        <p className="my-4">{state.current.condition.text}</p>
        <div className="bg-gray-800 w-full h-[1px]" />
        <div className="flex flex-col gap-4 text-gray-500">
          <div className="flex gap-3 mt-4 ">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" fill="white" viewBox="0 0 448 512">
                <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" /></svg>
            </span>
            <span>{dayName} {day}, {monthName}</span>
          </div>
          <div className="flex gap-3">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" fill="white" viewBox="0 0 384 512">
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
            </span>
            <span>{state.location.name}, {state.location.region}</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Now