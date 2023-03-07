import { useEffect, useState } from "react";
import { BiPlusCircle, BiEdit, BiTrash, BiSearch } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers, filterUsersByRole, searchUsersByEmail } from "../../../../redux/slices/userSlice";


const TableUser = (props) => {
    const { setModalAddUser, handleClickBtnUpdate, handleClickBtnDelete } = props
    const [role, setRole] = useState("user");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    const listUsers = useSelector(state => state.user.listUsers);

    // useEffect(() => {
    //     dispatch(fetchAllUsers())
    // }, [])

    const handleFileterRole = async () => {
        dispatch(filterUsersByRole({ role }))
    }

    useEffect(() => {
        dispatch(searchUsersByEmail({ email }))
    }, [email])


    return (
        <div className="box-table">
            <div className="row-0">

            </div>
            <div className="row-1">
                <div class="search">
                    <BiSearch
                        className='search-icon'
                    />
                    <input
                        class="search-input"
                        type="search"
                        placeholder="Search here..."
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="box-left">
                    <select onChange={(e) => setRole(e.target.value)}>
                        <option value="all">All Role</option>
                        <option value="admin">admin</option>
                        <option value="user">user</option>
                    </select>
                    <button
                        onClick={() => handleFileterRole()}
                    >Apply</button>
                </div>
                <div className="box-right">
                    <button
                        onClick={() => setModalAddUser(true)}
                    >
                        <BiPlusCircle
                            className="icon-add"
                        />
                        Add User
                    </button>
                </div>
            </div>
            <table className="row-2">
                <thead>
                    <tr className="col-title">
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((user, index) => {
                            return (
                                <tr key={`table-user-${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.address}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <BiEdit
                                            className="icon-edit icon"
                                            onClick={() => handleClickBtnUpdate(user)}
                                        />
                                        <BiTrash
                                            className="icon-delete icon"
                                            onClick={() => handleClickBtnDelete(user)}
                                        />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TableUser;