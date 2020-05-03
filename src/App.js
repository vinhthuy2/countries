import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SearchCountry } from './components/search-countries/SearchCountries';
import { Games } from './components/Games';
import { CusRoute } from './Routes/CusRoute';
import { Main } from './components/main/Main';

function App() {
  return (
    <div>
      <div>
        <Switch>
          <Route path="/main" component={Main} />
          <CusRoute path="/search" component={SearchCountry} />
          <CusRoute path="/games" component={Games} />
		  <Redirect path="/" to="/main"/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
