import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Vehicles from './containers/Vehicles';
import { useAuth0 } from './auth/auth0-wrapper';

function App() {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    loading,
  } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBar
        auth={{
          isAuthenticated,
          loginWithRedirect,
          logout,
          user,
        }}
      />
      <Switch>
        <Route exact path="/" component={Vehicles} />
      </Switch>
    </div>
  );
}

export default App;
