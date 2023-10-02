
const AirCard = ({text , val ,valDeg, icon}) => {
  return (
    <div >
      <p className="text-gray-500">{text}</p>
      <div className="flex justify-between items-center mt-5 mb-2">
        <img src={icon} alt="" className="h-8 w-8 lg:h-12 lg:w-12"/>
        <h1 className="text-2xl lg:text-4xl" >{val}<span className="text-sm lg:text-2xl">{valDeg}</span> </h1>
      </div>
    </div>
  )
}

export default AirCard