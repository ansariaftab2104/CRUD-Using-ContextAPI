import React from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";
import { useContext } from "react";
import { MyStore } from "./context/UserContext";

const App = () => {
  const { toggle } = useContext(MyStore);
  return (
    <div className="w-full h-screen bg-zinc-300">
      <Navbar />
      {toggle ? <UserCard/> : <Form/>}
    </div>
  );
};

export default App;
