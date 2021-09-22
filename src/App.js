import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import Countries from './component/countries/Countries';
import Header from './component/countries/Header/Header';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
    </div>
  );
}

// function Countries() {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     fetch("https://restcountries.eu/rest/v2/all")
//       .then(res => res.json())
//       .then(data => setCountries(data));
//   }, [])
//   return (

//     <div>

//       <h2>Traveling Around the World!!!</h2>
//       <h4>Countries available: {countries.length}</h4>

//     </div>
//   )
// }
export default App;
