
import direction from "../assets/direction.png"

const HoureCard = ({ subState }) => {

  const epochTime = subState.time_epoch * 1000;
  const date = new Date(epochTime);
  const hour = date.getHours();

  console.log(subState)

  return (
    <div className="flex flex-col  gap-4 items-center justify-center duration-200 hover:scale-[1.02] group">
      <div className='bg-secondary py-4 lg:py-2 px-4 md:-px-6 lg:px-6 xl:px-4 3xl:px-6  5xl:px-8 px-auto lg:rounded-3xl rounded-lg text-white '>
        <div className='flex flex-col justify-center items-center gap-2'>
          <h2 className='flex text-gray-300 text-sm md:text-md'>{hour >= 12 ? (hour - 12 === 0) ? 12 + " PM" : hour - 12 + " PM" : hour === 0 ? 12 + " AM" : hour + " AM"}</h2>
          <img src={subState.condition.icon} alt="" className="flex scale-150 w-8 h-8 lg:w-auto lg:h-auto " />
          <p className='flex text-gray-300 '>{subState.temp_c}&deg;</p>
        </div>
      </div>

      <div className='bg-secondary py-2 w-full lg:rounded-3xl rounded-lg text-white'>
        <div className='flex flex-col justify-center items-center gap-4 lg:gap-6'>
          <div className="group-hover:animate-[spin_.3s_ease-in-out]">
            <img
              src={direction} alt=""
              style={{ transform: `rotate(${90-subState.wind_degree}deg)` }}
              className="w-8 lg:w-auto"
            />
          </div>

          <h2 className=' '>{subState.wind_kph}<span className="text-sm md:text-md">km/h</span> </h2>
        </div>
      </div>
    </div>

  )
}

export default HoureCard