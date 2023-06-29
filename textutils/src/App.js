import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      setInterval(() => {
        document.title = 'Textutils is Amazing';
      }, 2000);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
      setInterval(() => {
        document.title = 'Install Textutils Now!!!';
      }, 2500);
    }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    {/* {<Navbar /> Also works because of default} */}
    {/* {<Navbar title="TextUtils" /> Also works because of default} */}
    <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode}/>
      {/* <About /> */}
    </div>
    </>
  );
}

export default App;
