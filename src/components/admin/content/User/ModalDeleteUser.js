import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { deleteUser } from '../../../../services/apiService';
import { useDispatch } from "react-redux";
import { fetchAllUsers } from "../../../../redux/slices/userSlice";

const ModalDeleteUser = (props) => {
    const { modalDeleteUser, setModalDeleteUser, dataDelete } = props;

    const dispatch = useDispatch();

    const handleClose = () => setModalDeleteUser(false);


    const handleSubmitDeleteUser = async () => {
        let data = await deleteUser(dataDelete._id);

        if (data && data.errCode === 0) {
            toast.success("Success");
            const page = 1;
            const limit = 7;
            dispatch(fetchAllUsers({ page, limit }));
            handleClose();
        } else {
            toast.error("Error");
        }
    }

    return (
        <>
            <Modal
                show={modalDeleteUser}
                onHide={handleClose}
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete the user <b>"{dataDelete.username}"</b>?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmitDeleteUser}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;