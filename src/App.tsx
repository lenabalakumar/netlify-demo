import axios from "axios";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import UserList from "./routes/UserList";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        background: "grey",
        opacity: 0.2,
        height: screen.height,
      }}
    >
      <div
        style={{
          width: "70%",
          background: "white",
        }}
      >
        <div style={{ padding: 20 }}>
          <Link to={"/userlist"}>User list</Link>
        </div>
      </div>
    </div>
  );
};

export default App;
