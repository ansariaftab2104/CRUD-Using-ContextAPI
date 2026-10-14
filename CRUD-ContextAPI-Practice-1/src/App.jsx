import React from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";
import { useContext } from "react";
import { MyStore } from "./context/UserContext";

const App = () => {
  const { toggle } = useContext(MyStore);
  return (
    <div className="w-full min-h-screen bg-zinc-300 flex flex-col">
      <div className="mb-5">
        <Navbar />
      </div>
      {toggle ? <div className="flex justify-evenly items-center flex-wrap gap-5">
        <UserCard/>
      </div> : 
      <div className="flex items-center justify-center">
        <Form/>
      </div>
      }
    </div>
  );
};

export default App;
