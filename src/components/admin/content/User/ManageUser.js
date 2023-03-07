import { useState } from "react";
import ModalAddUser from "./ModalAddUser";
import ModalDeleteUser from "./ModalDeleteUser";
import ModalUpdateUser from "./ModalUpdateUser";
import TableUser from "./TableUser";


const ManageUser = (props) => {
    const [modalAddUser, setModalAddUser] = useState(false);
    const [modalUpdateUser, setModalUpdateUser] = useState(false);
    const [modalDeleteUser, setModalDeleteUser] = useState(false);

    const [dataUpdate, setDataUpdate] = useState({});
    const [dataDelete, setDataDelete] = useState({});

    const handleClickBtnUpdate = (user) => {
        setModalUpdateUser(true);
        setDataUpdate(user);
    }

    const handleClickBtnDelete = (user) => {
        setModalDeleteUser(true);
        setDataDelete(user);
    }


    return (
        <div id="content">
            <h2>Manage User</h2>
            <TableUser
                setModalAddUser={setModalAddUser}
                setModalUpdateUser={setModalUpdateUser}
                handleClickBtnUpdate={handleClickBtnUpdate}
                handleClickBtnDelete={handleClickBtnDelete}
            />
            <ModalAddUser
                modalAddUser={modalAddUser}
                setModalAddUser={setModalAddUser}
            />
            <ModalUpdateUser
                modalUpdateUser={modalUpdateUser}
                setModalUpdateUser={setModalUpdateUser}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
            />
            <ModalDeleteUser
                modalDeleteUser={modalDeleteUser}
                setModalDeleteUser={setModalDeleteUser}
                dataDelete={dataDelete}
            />
        </div>
    );
}

export default ManageUser;