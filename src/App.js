import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SimpleForm from "./SimpleForm";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <SimpleForm />
      <ToastContainer />
    </div>
  );
}

export default App;
