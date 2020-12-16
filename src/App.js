import './App.css';

function App() {
  const details = ['Sakib Khan', 'Manna', 'Dipjol', 'Bapparaz']
  return (
    <div className="App">
      <header className="App-header">
        <Nayok name={details[0]}></Nayok>
        <Nayok name={details[3]} ></Nayok>
        <Nayok name={details[1]}></Nayok>
        <Nayok name={details[2]}></Nayok>
      </header>
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
