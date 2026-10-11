import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
// import StatePractice from "./Components/StatePractice";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app-wrapper">
      {" "}
      {/* <-- ADD THIS WRAPPER */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
