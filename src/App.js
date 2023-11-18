import "./App.css";
import { useEffect, useState } from "react";
import Inprogress from "./Components/Inprogress";
import Todo from "./Components/Todo";
import Backlog from "./Components/Backlog";
import Done from "./Components/Done";
import Cancel from "./Components/Cancel";
import Alltags from "./Components/Alltags";
import Allusers from "./Components/Allusers";
import Priority from "./Components/Priority";
function App() {
  const [ticket, setTickets] = useState([]);
  const [user, setUsers] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [order, setorder] = useState();
  const [userselect, setUserSelect] = useState(false);
  const [priorityselect, setPrioritySelect] = useState(false);
  const [statusselect, setStatusSelect] = useState(false);
  const [group, setgroup] = useState();

  let item;

  let status = ["In progress", "Todo", "Backlog", "Done", "Cancel"];
  let priority = ["No Priority", "Urgent", "High", "Medium", "Low"];
  let usercount = [0, 0, 0, 0, 0];
  const changeClass = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    const getvalue = async () => {
      const res = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      const data = await res.json();
      console.log(data);
      setTickets(data.tickets);
      setUsers(data.users);
    };
    getvalue();
  }, []);

  let alluser = [];
  user.map((users) => {
    alluser.push(users.name);
  });

  useEffect(() => {
    item = localStorage.getItem("selectedItem");

    if (item === "user") {
      setUserSelect(true);
      setPrioritySelect(false);
      setStatusSelect(false);
    }
    if (item === "status") {
      setUserSelect(false);
      setPrioritySelect(false);
      setStatusSelect(true);
    }
    if (item === "priority") {
      setUserSelect(false);
      setPrioritySelect(true);
      setStatusSelect(false);
    }
    setgroup(item);
  }, [item, group]);
  let number = [0, 0, 0, 0, 0];
  let prioritycount = [0, 0, 0, 0, 0];
  ticket.map((tickets) => {
    if (tickets.status == "Todo") number[1] = number[1] + 1;
    if (tickets.status == "In progress") number[0] = number[0] + 1;
    if (tickets.status == "Backlog") number[2] = number[2] + 1;
    if (tickets.status == "Done") number[3] = number[3] + 1;
    if (tickets.status == "Cancel") number[4] = number[4] + 1;
  });

  ticket.map((tickets) => {
    if (tickets.userId == "usr-1") usercount[0] = usercount[0] + 1;
    if (tickets.userId == "usr-2") usercount[1] = usercount[1] + 1;
    if (tickets.userId == "usr-3") usercount[2] = usercount[2] + 1;
    if (tickets.userId == "usr-4") usercount[3] = usercount[3] + 1;
    if (tickets.userId == "usr-5") usercount[4] = usercount[4] + 1;
  });

  ticket.map((tickets) => {
    if (tickets.priority == 0) prioritycount[0] = prioritycount[0] + 1;
    if (tickets.priority == 4) prioritycount[1] = prioritycount[1] + 1;
    if (tickets.priority == 3) prioritycount[2] = prioritycount[2] + 1;
    if (tickets.priority == 2) prioritycount[3] = prioritycount[3] + 1;
    if (tickets.priority == 1) prioritycount[4] = prioritycount[4] + 1;
  });

  const getvalue = (e) => {
    e.preventDefault();
    let entervalue = e.target.value;
    localStorage.setItem("selectedItem", entervalue);

    setgroup(entervalue);
    // if (item === "user") {
    //   setUserSelect(true);
    //   setPrioritySelect(false);
    //   setStatusSelect(false);
    // }
    // if (item === "status") {
    //   setUserSelect(false);
    //   setPrioritySelect(false);
    //   setStatusSelect(true);
    // }
    // if (item === "priority") {
    //   setUserSelect(false);
    //   setPrioritySelect(true);
    //   setStatusSelect(false);
    // }
  };
  const getorder = (e) => {
    setorder(e.target.value);
  };
  console.log(group, "group");
  const setTrue = () => {
    setToggle(true);
  };
  return (
    <div className="App">
      <div className="dropdown">
        <div className="filtertag" onClick={changeClass}>
          <img src="filter.png" alt="filter-icon" className="filtericon" />
          <p>Display</p>
          <img src="down-arrow.png" alt="arr-icon" />
        </div>

        <div className={toggle ? "hidden" : "dropdownmenu"}>
          <div className="statuses">
            <p>Grouping</p>
            <select id="users" onChange={getvalue}>
              <option
                value="user"
                selected={group == null ? false : userselect}
              >
                User
              </option>
              <option
                value="status"
                selected={group == null ? true : statusselect}
              >
                Status
              </option>
              <option
                value="priority"
                selected={group == null ? false : priorityselect}
              >
                Priority
              </option>
            </select>
          </div>
          <div className="statuses">
            <p>Ordering</p>
            <select id="ordering" onChange={getorder}>
              <option value="priority">Priority</option>
            </select>
          </div>
        </div>
      </div>

      {group === "status" || group == null ? (
        <Alltags status={status} number={number} setTrue={setTrue} />
      ) : group === "user" ? (
        <Allusers alluser={alluser} setTrue={setTrue} usercounts={usercount} />
      ) : (
        <Priority
          priority={priority}
          setTrue={setTrue}
          prioritycounts={prioritycount}
        />
      )}
      <div className="work-status" onClick={setTrue}>
        <div className="stat1">
          <Inprogress ticket={ticket} groupby={group ? group : "status"} />
        </div>
        <div className="stat2">
          <Todo ticket={ticket} groupby={group ? group : "status"} />
        </div>
        <div className="stat3">
          <Backlog ticket={ticket} groupby={group ? group : "status"} />
        </div>
        <div className="stat4">
          <Done ticket={ticket} groupby={group ? group : "status"} />
        </div>
        <div className="stat5">
          <Cancel ticket={ticket} groupby={group ? group : "status"} />
        </div>
      </div>
    </div>
  );
}

export default App;
