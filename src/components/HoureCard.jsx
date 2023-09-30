
import direction from "../assets/direction.png"

const HoureCard = ({ subState }) => {

  const epochTime = subState.time_epoch * 1000;
  const date = new Date(epochTime);
  const hour = date.getHours();

  console.log(subState)

  return (
    <div className="flex flex-col gap-4 duration-200 hover:scale-[1.02] group">
      <div className='bg-secondary py-4 px-12 rounded-3xl text-white '>
        <div className='flex flex-col justify-center items-center gap-6'>
          <h2 className='text-gray-300'>{hour >= 12 ? (hour - 12 === 0) ? 12 + " PM" : hour - 12 + " PM" : hour === 0 ? 12 + " AM" : hour + " AM"}</h2>
          <img src={subState.condition.icon} alt="" className="scale-150" />
          <p className='text-gray-300'>{subState.temp_c}</p>
        </div>
      </div>

      <div className='bg-secondary py-4 px-12 rounded-3xl text-white '>
        <div className='flex flex-col justify-center items-center gap-6'>
          <div className="group-hover:animate-[spin_.2s_ease-in-out]">
            <img
              src={direction} alt=""
              style={{ transform: `rotate(${subState.wind_degree}deg)` }}
            />
          </div>

          <h2 className=''>{subState.wind_kph}km/h</h2>
        </div>
      </div>
    </div>

  )
}

export default HoureCard