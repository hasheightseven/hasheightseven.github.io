import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  // Accessing state from the Redux store
  const someData = useSelector((state) => state.someData);
  return (
    <div>
      <h1>Home Component</h1>
      <p>Data from Redux store: {someData}</p>
    </div>
  );
};

export default Home;
