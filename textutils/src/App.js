import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About Us"/>
    {/* {<Navbar /> Also works because of default} */}
    {/* {<Navbar title="TextUtils" /> Also works because of default} */}
    <div className="container my-3">
      <TextForm heading="Enter the text to analyse"/>
      {/* <About /> */}
    </div>
    </>
  );
}

export default App;
