import { React } from "react";
import ".././App.css";
const Inprogress = ({ ticket, groupby }) => {
  return (
    <div>
      {ticket.map((tickets, index) => {
        if (tickets.status === "In progress" && groupby === "status") {
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
        if (tickets.userId === "usr-1" && groupby === "user") {
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
        if (tickets.priority === 0 && groupby === "priority") {
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
export default Inprogress;
