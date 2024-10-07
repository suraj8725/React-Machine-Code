// import React from 'react'


// eslint-disable-next-line react/prop-types
const SummaryCard = ({ icon, text, number ,color}) => {
  return (
    <div className="rounded flex bg-white">
      <div className={`text-3xl flex justify-center items-center ${color} text-white px-5`}>{icon}</div>
      <div>
        <p className="text-lg font-semibold ml-4"> {text}</p>
        <p className="text-xl font-bold ml-4">{number}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
