import React, { useEffect, useState } from 'react';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
export const SearchCountry = () => {
  const searchInputElement = React.useRef(null);
  const [listCountries, setListCountries] = useState([]);

  useEffect(() => {
    const searchTyping = fromEvent(searchInputElement.current, 'keyup')
      .pipe(debounceTime(200))
      .subscribe(async (e) => {
        const input = e.target.value;
        let listCountries = [];
        if (input) {
          listCountries = await fetch(
            `https://restcountries.eu/rest/v2/name/${input}`
          ).then((res) => res.json());
        }
        setListCountries(listCountries);
      });
    return () => searchTyping.unsubscribe();
  }, []);

  return (
    <div>
      <h4>Search Country</h4>
      <div>
        <input
          ref={searchInputElement}
          type="text"
          placeholder="Type name of country"
        />
        <ul>
          {listCountries.length
            ? listCountries.map((c, idx) => <li key={idx}>{c.name}</li>)
            : null}
        </ul>
      </div>
    </div>
  );
};
