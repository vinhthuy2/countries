import React, { useEffect, useState } from 'react';

export const Country = (props) => {
    const countryName = props.match.params.name;
    const [country, setCountry] = useState({});
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => setCountry(data[0]))
            .catch((err) => alert(err));
    }, []);

    return (
        <div>
            <h1>
                {country.name}{' '}
                {country.nativeName?.length !== country.name?.length
                    ? `(${country.nativeName})`
                    : ''}
            </h1>
        </div>
    );
};
