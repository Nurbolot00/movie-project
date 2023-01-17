import React from 'react';
import { Modal } from './Modal';
import Button from './UI/button/Button';

const ConfirmDeleteModal = ({onClose,onConfirm}) => {
    return (
        
        <Modal onClose={onClose}>
            <p>Are you sure you wanna delete this item?</p>
            <Button color='red' onClick={onConfirm}>No</Button>
            <Button color='#00329e' onClick={onConfirm}>Yes</Button>
        </Modal>
    );
};

export default ConfirmDeleteModal;