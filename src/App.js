import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [person, setPerson] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setPerson(data))
  },[])


  const products = [
    {name: 'HSC Higher Math CHapter-1 SHIKKHANGON BD Smart PDF', price: '$30', description: 'For HSC Student'},
    {name: 'HSC Higher Math CHapter-7 SHIKKHANGON BD Smart PDF', price: '$30', description: 'For HSC Student'},
    {name: 'SSC Higher Math CHapter-9 SHIKKHANGON BD Smart PDF', price: '$30', description: 'For SSC Student'},
    {name: 'SSC Higher Math CHapter-10 SHIKKHANGON BD Smart PDF', price: '$30', description: 'For SSC Student'},
    {name: 'SSC Higher Math CHapter-4 SHIKKHANGON BD Smart PDF', price: '$30', description: 'For SSC Student'},
  ]

  const details = ['Sakib Khan', 'Manna', 'Dipjol', 'Bapparaz']
  
  return (
    <div className="App">
      <header className="App-header">
      {
        person.map(psn => <Json id={psn.id} name={psn.name} username={psn.username} email={psn.email}></Json>)
      }
        <Count></Count>
        {
          products.map(pd => <Product name = {pd.name} price={pd.price} description={pd.description}></Product>)
        }
        
        <Nayok name={details[0]}></Nayok>
        <Nayok name={details[3]} ></Nayok>
        <Nayok name={details[1]}></Nayok>
        <Nayok name={details[2]}></Nayok>
      </header>
    </div>
  );
}

// Main App end here

function Json(props) {
  const jsonStyle = {
    border: '2px solid red',
    margin: '10px',
    padding: '10px',
    width: '400px',
  }
  return(
    <div style={jsonStyle} >
      <p>ID: {props.id}</p>
      <h2>Name:  {props.name}</h2>
      <h3>User Name:  {props.username}</h3>
      <p>E-mail:  {props.email}</p>
      <button>1</button>
    </div>
  );
}

function Product(props){
  const productStyle = {
    border: '2px solid red',
    margin: '5px',
    padding: '5px',
    width: '500px'
  }
  return(
    <div style={productStyle}>
      <h3>{props.name}</h3>
      <p>{props.price}</p>
      <p>{props.description}</p>
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
