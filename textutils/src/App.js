import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    {/* {<Navbar /> Also works because of default} */}
    {/* {<Navbar title="TextUtils" /> Also works because of default} */}
    <div className="container my-3">
      <TextForm heading="Enter the text to analyse" mode={mode}/>
      {/* <About /> */}
    </div>
    </>
  );
}

export default App;
