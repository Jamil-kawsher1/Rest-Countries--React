import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props);
    const { name, flag, capital, population, region } = props.country;
    return (
        <div className="country">

            <h4 >This Is a {name}</h4>
            <img src={flag} alt={name} />
            <p>Capital : {capital} <br /> Population: {population} <br /> Region: {region}</p>


        </div>
    );
};

export default Country;