import React, { useEffect, useState } from 'react';
import { fromEvent, of } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import CountryItemList from '../country/CountryItemList/CountryItemList';
import * as classes from './SearchCountries.module.css';
export const SearchCountry = () => {
  const searchInputElement = React.useRef(null);
  const [searchResult, setsearchResult] = useState({});

  useEffect(() => {
    const searchTyping = fromEvent(searchInputElement.current, 'keyup')
      .pipe(
        debounceTime(50),
        switchMap((e) => {
          const input = e.target.value;
          const res = input
            ? fetch(`https://restcountries.eu/rest/v2/name/${input}`)
            : of(null);
          return res;
        })
      )
      .subscribe((fetch) => {
        if (fetch) {
          fetch
            .json()
            .then((data) => {
              if (data instanceof Array) {
                setsearchResult({
                  items: data
                });
              } else {
                setsearchResult({
                  error: data
                });
              }
            })
            .catch((err) => {
              setsearchResult({
                error: err
              });
            });
        } else {
          setsearchResult({});
        }
      });
    return () => searchTyping.unsubscribe();
  }, []);

  return (
    <div>
      <h1>Search Country</h1>
      <br/>
      <div className={classes.search}>
        <input
          className={classes.searchInput}
          ref={searchInputElement}
          type="text"
          placeholder="Type name of country"
        />
        <CountryItemList data={searchResult} />
      </div>
    </div>
  );
};
