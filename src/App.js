import { useState } from 'react';
import './App.css';

function App() {
  const details = ['Sakib Khan', 'Manna', 'Dipjol', 'Bapparaz']
  return (
    <div className="App">
      <header className="App-header">
        <Count></Count>
        <Nayok name={details[0]}></Nayok>
        <Nayok name={details[3]} ></Nayok>
        <Nayok name={details[1]}></Nayok>
        <Nayok name={details[2]}></Nayok>
      </header>
    </div>
  );
}

function Count() {
  const [count, setCount] = useState(0);
  return(
    <div>
      <h2>Movie Counter: {count}</h2>
      <button onClick={() => setCount(count+1)} >Increase</button>
      <MovieCount MovieCount={count + 10} ></MovieCount>
    </div>
  );
}

function MovieCount(props) {
  return(
    <div>
      <h2>I have acted: {props.MovieCount}</h2>
    </div>
  );
}
function Nayok(props) {
  console.log(props);
  var NayokStyle = {
    border: '1px solid red',
    margin: '5px',
    width: '400px'
  }
  var name = props.name;
  return(
    <div style={NayokStyle} >
      <h1>I am {name}</h1>
      <p>Tui amare cinos ami {name}</p>
    </div>
  );
}

export default App;
