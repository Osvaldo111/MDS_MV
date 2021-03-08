import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ModalCard = ({children, onClose}) => {
    return (
        <div className="modal">
            <div className="modal-content" onClick={onClose}>
                <span className="close-bttn">&times;</span>
                {children}
            </div>
        </div>
    );
};

ModalCard.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func
};

export default ModalCard;