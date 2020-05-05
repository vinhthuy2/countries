import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import * as classes from './MainLayout.module.css';
export const MainLayout = ({ component: Component, ...rest }) => {
    console.log(rest);
    const goBack = () => {
        rest.history.goBack();
    };
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <button className={classes.backBtn} to='/main' onClick={goBack}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
            </div>
            <div className={classes.content}>
                <Component {...rest}></Component>
            </div>
        </div>
    );
};
