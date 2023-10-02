

const Cities = ({ state, showThisCity }) => {
  return (
    <div className="bg-secondary p-8 rounded-3xl text-white hidden lg:block">
      <ul className="grid grid-cols-3  gap-4">

        <li
          onClick={() => showThisCity("New York")}
          className="text-md text-gray-500 bg-middle p-2 rounded-md text-center  cursor-pointer hover:scale-[1.02]  hover:text-gray-300 duration-200 ">
          New York</li>
        <li
          onClick={() => showThisCity("İstanbul")}
          className="text-md text-gray-500 bg-middle p-2 rounded-md text-center  cursor-pointer hover:scale-[1.02]  hover:text-gray-300 duration-200 ">
          İstanbul</li>
        <li
          onClick={() => showThisCity("Mecca")}
          className="text-md text-gray-500 bg-middle p-2 rounded-md text-center  cursor-pointer hover:scale-[1.02]  hover:text-gray-300 duration-200 ">
          Mecca</li>
       
        <li
          onClick={() => showThisCity("Alexandria")}
          className="text-md text-gray-500 bg-middle p-2 rounded-md text-center  cursor-pointer hover:scale-[1.02]  hover:text-gray-300 duration-200 ">
          Alexandria</li>
        <li
          onClick={() => showThisCity("London")}
          className="text-md text-gray-500 bg-middle p-2 rounded-md text-center  cursor-pointer hover:scale-[1.02]  hover:text-gray-300 duration-200 ">
          London</li>
        <li
          onClick={() => showThisCity("Paris")}
          className="text-md text-gray-500 bg-middle p-2 rounded-md text-center  cursor-pointer hover:scale-[1.02]  hover:text-gray-300 duration-200 ">
          Paris</li>
        <li
          onClick={() => showThisCity("Barcelona")}
          className="text-md text-gray-500 bg-middle p-2 rounded-md text-center  cursor-pointer hover:scale-[1.02]  hover:text-gray-300 duration-200 ">
          Barcelona</li>
        <li
          onClick={() => showThisCity("Dubai")}
          className="text-md text-gray-500 bg-middle p-2 rounded-md text-center  cursor-pointer hover:scale-[1.02]  hover:text-gray-300 duration-200 ">
          Dubai</li>
        <li
          onClick={() => showThisCity("Cairo")}
          className="text-md text-gray-500 bg-middle p-2 rounded-md text-center  cursor-pointer hover:scale-[1.02]  hover:text-gray-300 duration-200 ">
          Cairo</li>

      </ul>
    </div>
  )
}

export default Cities