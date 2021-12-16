/**
 *
 * NavBar
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import StyledNavBar from './styledComponents/styledNavBar';
import Button from '../Button';

const NavBar = props => {
  const { isAuthenticated, loginWithRedirect, logout, user } = props.auth;

  return (
    <div>
      {!isAuthenticated && (
        <StyledNavBar>
          <h1>Please click login to get started</h1>
          <Button onClick={() => loginWithRedirect({})} title="Log in" />
        </StyledNavBar>
      )}

      {isAuthenticated && (
        <StyledNavBar>
          <h1>Welcome {user.name}, you are now logged in</h1>
          <img src={user.picture} alt="avatar" />
          <Button onClick={() => logout()} title="Log out" />
        </StyledNavBar>
      )}
    </div>
  );
};

NavBar.propTypes = {
  auth: PropTypes.object,
};

export default memo(NavBar);
