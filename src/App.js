import React from 'react'
import Phone from "./components/Phone/Phone"
import "./App.css";
import svg from "./images/Clip.svg"

const App = () => {
  return(
    <>
      {/* App container */}
      {/* <img src={svg} alt="svg"/> */}
      <div className="whole-app">
        <Phone />
        <div className="landing-text">
          <h2>Simple Booking</h2>
          <p>Stay in touch with our dog walkers through the chat interface. This makes it easy to 
          discuss arrangements and make bookings. Once the walk has been completed you can rate 
          your walker and book again all through the chat.</p>
        </div>
      </div>
    </>
  );
}

export default App;