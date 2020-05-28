import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal 
        isOpen={!!props.selectedOption} 
        contentLabel="Selected option"
        onRequestClose={props.onClose}
        closeTimeoutMS={200}
        className="modal">
        <h3 className="modal__title">Selected Option</h3>
        <p className="modal__text">{props.selectedOption}</p>
        <button className="button" onClick={props.onClose}>OK</button>
    </Modal>
);

export default OptionModal;