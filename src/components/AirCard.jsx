
const AirCard = ({text , val ,valDeg, icon}) => {
  return (
    <div >
      <p className="text-gray-500">{text}</p>
      <div className="flex justify-between items-center mt-5 mb-2">
        <img src={icon} alt="" className="h-12 w-12"/>
        <h1 className="text-4xl" >{val}{valDeg}</h1>
      </div>
    </div>
  )
}

export default AirCard