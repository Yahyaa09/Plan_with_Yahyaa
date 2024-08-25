import React, { useState } from "react";
import data from "./data"
import Tours from "./components/Tours";

const App = () => {

  const [tours,setTour] = useState(data);

  function removeTour(id)
  {
    let newTours = tours.filter(tour => tour.id !== id);
    setTour(newTours);
  }

  function refreshHandler()
  {
    setTour(data);
  }

  if(tours.length==0)
  {
    return(
      <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col bg-[#EEE9D1] ">
        <h2 className="font-bold text-[1.5rem] text-[#598493]">No tours left !</h2>
        <button onClick={refreshHandler} className="mt-[18px] pt-[10px] pb-[10px] pl-[80px] pr-[80px] bg-[#F7F1E8] rounded-md font-semibold text-[#598493] hover:bg-[#598493]  hover:text-[#F7F1E8] transition-all duration-200 active:scale-95">Refresh</button>

      </div>
    );
  }

  return (
    <div className=" bg-[#EEE9D1] flex md:justify-center">
      <Tours tours={tours} removeTour ={removeTour}></Tours> 
    </div>
    );
};

export default App;
