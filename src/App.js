import './App.css';
import React, { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';
function App() {
  
  const [countries,setCountries]  = useState([]);
  const [cart,setCart] = useState([]);

  useEffect(() =>{
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err =>console.log(err));
  },[])

  const handleAddCountry = (country) => {
    // console.log('added',country);
    const newCart = [...cart, country];
    setCart(newCart);

}
  return (
    <div className="App">
        <h4>Country Loaded:{countries.length} </h4>
        <p>Country added : {cart.length}</p>
        <Cart cart={cart}></Cart>
      <header>
          {
            countries.map(country => <Country country={country} key={country.alpha2code} handleAddCountry={handleAddCountry}></Country>)
          }    
      </header>
    </div>
  );
}

export default App;
