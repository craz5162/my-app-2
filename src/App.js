import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [Countries,setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  },[])
  return (
    <div className="App">
      <h1>hi iam arfat who are you : {Countries.length}</h1>
      
      <div className="data-2">
      {
        Countries.map(country => <Country name ={country.name.common} area ={country.area}
          img ={country.flags.png} population ={country.population}
        ></Country>)
      }
      </div>
    </div>
  );
}
const Country = (Props) =>{
  return(
    <div className='data'>
      <img src={Props.img} alt="" />
      <h2>Name : {Props.name}</h2>
      <h3>area : {Props.area}</h3>
      <h4>population : {Props.population}</h4>
    </div>
  )
}

export default App;
