import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
//Removing Routing for Deploying on GitHub Pages: video 17
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light"); //weather dark mode is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils: Dark Mode";
      // Title Changing --> Not good user experience
      // setInterval(() => {
      //   document.title= "TextUtils is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils: Light Mode";
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils1" about="about textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      {/* <Routes> */}
        {/* exact usage:
        /user --> component 1
        /user/home --> component 2 */}
          {/* <Route exact path="/about" element={<About/>}> */}
            {/* <About /> */}
          {/* </Route>
         <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />}> */}
          <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />
          {/* </Route>
        </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;