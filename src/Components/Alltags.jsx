import React from "react";

const Alltags = ({ status, number, setTrue }) => {
  return (
    <div className="maincontainer" onClick={setTrue}>
      {status.map((status, index) => {
        return (
          <div className="heading" key={index}>
            <div>
              <img
                src={`todo-${index}.png`}
                alt="icones"
                className="filtericon"
              />
              {status} &nbsp; {number[index]}
            </div>
            <div className="icons">
              <img src="plus-sign.png" alt="plus-icon" />
              <img src="tripledot.png" alt="tripledot-icon" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Alltags;
