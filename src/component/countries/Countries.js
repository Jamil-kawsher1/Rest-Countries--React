import React, { useEffect, useState } from 'react';
import Country from './Country/Country';

const Countries = () => {
    const [countries, setContries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(res => res.json())
            .then(data => setContries(data));
    }, [])
    return (
        <div>
            <h1>This Is Country From inner country </h1>

            {
                // name={country.name} capital={country.capital} population={country.population}
                countries.map(country => <Country country={country}> </Country>)
            }
        </div>
    );
};

export default Countries;