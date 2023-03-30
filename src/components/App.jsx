import React from "react";

function App() {
  const [time, newTime] = React.useState( new Date().toLocaleTimeString())

  function updateTime(){
    newTime( new Date().toLocaleTimeString());
  };
  
  setInterval(updateTime, 1000);
  
  return (
    <div className="container">
    <h1>{time}</h1>
    <button>Get Time</button>
    </div>
    );
  }
  export default App;
  