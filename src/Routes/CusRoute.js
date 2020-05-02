import React from 'react';
import { Route } from 'react-router-dom';
import { MainLayout } from '../layout/main-layout/MainLayout';
export const CusRoute = ({ component: Component }, ...rest) => {
  return (
    <Route
      {...rest}
      render={(props) => <MainLayout component={Component} {...props} />}
    />
  );
};
