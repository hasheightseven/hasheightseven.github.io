import React from "react";

// A simple Button component
const Button = ({ label, onClick }) => {
  return `<button onClick={onClick}>{label}</button>`;
};

// Parent component using the Button
const App = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <h1>Component-Based Programming</h1>
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
};

export default App;
