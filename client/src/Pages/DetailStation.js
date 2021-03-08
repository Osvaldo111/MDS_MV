import React from 'react';
import PropTypes from 'prop-types';

const DetailStation = (props) => {
    const {
        location: { data = {} }
    } = props;

    const {
        station_id,
        num_bikes_available,
        is_renting,
        is_returning,
        is_installed,
        num_docks_available
    } = data;

    return (
        <div>
            <h3>Details of the station</h3>
            <p>Station ID: <span>{station_id}</span></p>
            <p>Bikes Available: <span>{num_bikes_available}</span></p>
            <p>Renting bikes: <span>{is_renting}</span></p>
            <p>Accepting bikes returns: <span>{is_returning}</span></p>
            <p>Is the station currently on the street: <span>{is_installed}</span></p>
            <p>Number of functional docks physically at the station: <span>{num_docks_available}</span></p>
        </div>
    );
};

DetailStation.propTypes = {
    data: PropTypes.object
};

export default DetailStation;