import React, { useEffect, useState } from 'react';
import Country from './Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries]= useState([])
    // console.log(countries)
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=> setCountries(data));
    },[])
    return (
        <div>
          <h1>Welcome To: {countries.length} Countries</h1>
          <div className='countries'>
            {
                countries.map(country=> <Country key={country.cca3} country={country}></Country>)
            }
          </div>
        </div>
    );
};

export default Countries;