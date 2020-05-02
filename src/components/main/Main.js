import React from 'react';
import { Link } from 'react-router-dom';
import * as classes from './Main.module.css';
export const Main = () => (
  <div className={classes.container}>
    <ul className={classes.items}>
      <Link to="/search">
        <li>Search</li>
      </Link>
      <Link to="/games">
        <li>Country guess</li>
      </Link>
    </ul>
  </div>
);
