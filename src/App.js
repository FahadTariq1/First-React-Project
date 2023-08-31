import React,{ useState } from "react";
import "./App.css";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes,Router } from "react-router-dom";
function App() {
  const[mode , setMode]=useState('light');
  const[alert , setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>
    {
      setAlert(null);
    },1500)
  }
  const removeBodyClasses=()=>
  {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');

  }
  const toggleMode =(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode enabled","success");
    }

  }

  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
    <Route path="/About" element={<About  mode={mode} />} />
    </Routes>
    <Routes>
    <Route
              exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try Texutils- Word Counter, Character Counter, Remove Extra Spaces"
                  mode={mode}
                />
              }
            />
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}


export default App;
