import React from "react";

const Backlog = ({ ticket, groupby }) => {
  // <span className="tripledot">---</span>
  return (
    <div>
      {ticket.map((tickets, index) => {
        if (tickets.status === "Backlog" && groupby === "status") {
          return (
            <div className="cardcontainer" key={index}>
              <div className="userdetail">
                <h4 className="usercam">{tickets.id}</h4>
                <img src="/men2.jpg" alt="userphoto" />
              </div>
              <div className="ticketTitle">{tickets.title}</div>
              <div className="tagcontainer">
                <span className="tripledot">---</span>

                <span className="tickettag">
                  <span className="dot">o</span>
                  <span className="ticktag">{tickets.tag}</span>
                </span>
              </div>
            </div>
          );
        }
        if (tickets.userId === "usr-3" && groupby === "user") {
          return (
            <div className="cardcontainer" key={index}>
              <div className="userdetail">
                <h4 className="usercam">{tickets.id}</h4>
                <img src="/men2.jpg" alt="userphoto" />
              </div>
              <div className="ticketTitle">{tickets.title}</div>
              <div className="tagcontainer">
                <span className="tripledot">---</span>

                <span className="tickettag">
                  <span className="dot">o</span>
                  <span className="ticktag">{tickets.tag}</span>
                </span>
              </div>
            </div>
          );
        }
        if (tickets.priority === 3 && groupby === "priority") {
          return (
            <div className="cardcontainer" key={index}>
              <div className="userdetail">
                <h4 className="usercam">{tickets.id}</h4>
                <img src="/men2.jpg" alt="userphoto" />
              </div>
              <div className="ticketTitle">
                <img
                  src={`${
                    tickets.status === "Todo"
                      ? "/todo-4.png"
                      : tickets.status === "In progress"
                      ? "/todo-0.png"
                      : "/todo-2.png"
                  }`}
                  className="iconss"
                />
                {tickets.title}
              </div>
              <div className="tagcontainer">
                <span className="tickettag">
                  <span className="dot">o</span>
                  <span className="ticktag">{tickets.tag}</span>
                </span>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Backlog;
