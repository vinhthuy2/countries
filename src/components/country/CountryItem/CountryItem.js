import React from 'react';
import PropTypes from 'prop-types';
import * as classes from './CountryItem.module.css';
export const CountryItem = ({ data, ...rest }) => {
  return (
    <div className={classes.item}>
      {data ? (
        <>
          <img className={classes.flag} src={data.flag} alt="flag" />
          <div>
            <h5>{data.name}</h5>
            <span>Hello</span>
          </div>
        </>
      ) : (
        <span>No item found</span>
      )}
    </div>
  );
};

CountryItem.propTypes = {
  data: PropTypes.any
};

function CountryModel(
  name,
  flag,
  nativeName,
  timeZones,
  capital,
  region,
  subregion,
  alpha2code
) {
  this.name = name;
  this.flag = flag;
  this.timeZones = timeZones;
  this.nativeName = nativeName;
  this.capital = capital;
  this.region = region;
  this.subregion = subregion;
  this.alpha2code = alpha2code;
}
// name: PropTypes.string,
//   flag: PropTypes.string,
//   currencies: PropTypes.array,
//   languages: PropTypes.array,
//   nativeName: PropTypes.string,
//   timeZones: PropTypes.string,
//   capital: PropTypes.string,
//   region: PropTypes.string,
//   subregion: PropTypes.string,
//   alpha2Code: PropTypes.string
