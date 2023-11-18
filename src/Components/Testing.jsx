import { React } from "react";
import ".././App.css";
const Testing = ({ ticket, groupby }) => {
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
      })}
    </div>
  );
};
export default Testing;
