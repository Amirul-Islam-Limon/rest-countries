import React from 'react';
import './Country.css'

const Country = (props) => {
    // const {population}=props.country
    const {name, population, region, area,flags}=props.country;
    // console.log(population, region, flags);
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2> 
             <img src={flags.png} alt="" /> 
             <h3>Population: {population}</h3>
            <h4>Region: {region}</h4>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;