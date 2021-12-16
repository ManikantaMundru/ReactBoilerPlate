/**
 *
 * Vehicles
 *
 */

import React from 'react';
// import PropTypes from "prop-types";
import { Helmet } from 'react-helmet';

/* eslint-disable react/prefer-stateless-function */
export class Vehicles extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Vehicles</title>
          <meta name="description" content="Description of Vehicles" />
        </Helmet>
      </div>
    );
  }
}

Vehicles.propTypes = {};

export default Vehicles;
