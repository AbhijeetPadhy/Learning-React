import logo from './logo.svg';
import './App.css';

let name = "Harry";
let name2 = "<b>Some Text</b>"

function App() {
  return (
    <div className="blank">
      <h1>Hello {name}</h1>
      <h1>Sanitised Text {name2}</h1>
      Lovely
    </div>
  );
}

export default App;
