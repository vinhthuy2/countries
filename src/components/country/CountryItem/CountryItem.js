import React from 'react';
import PropTypes from 'prop-types';
import * as classes from './CountryItem.module.css';
import { Link } from 'react-router-dom';
export const CountryItem = ({ data, ...rest }) => {
    return (
        <Link to={`/countries/${data.name}`} className={classes.item}>
            {data ? (
                <>
                    <img className={classes.flag} src={data.flag} alt='flag' />
                    <div className={classes.itemInfo}>
                        <div className={classes.itemHeader}>
                            <h5>{data.name}</h5>
                            <h5>{data.alpha2Code}</h5>
                        </div>
                        <div className={classes.itemFooter}>
                            <span>{data.subregion}</span>
                            <span>{data.timezones[0]}</span>
                        </div>
                    </div>
                </>
            ) : (
                <span>No item found</span>
            )}
        </Link>
    );
};

CountryItem.propTypes = {
    data: PropTypes.any,
};

function CountryModel(name, flag, nativeName, timeZones, capital, region, subregion, alpha2code) {
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
