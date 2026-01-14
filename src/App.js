import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  // setMode('dark');
  const toggleMode = ()=>{
    // console.log(mode);
    // console.log("Toggle Mode has been clicked");
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title="NavBar2" about="About Website" mode={mode} toggleMode={toggleMode}/>
      <div>
        <Routes>
          <Route path="/" element={<TextForm lable="Please Enter Text" mode={mode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
