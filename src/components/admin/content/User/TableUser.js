import { useEffect, useState } from "react";
import { BiPlusCircle, BiEdit, BiTrash, BiSearch, BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers, filterUsersByRole, searchUsersByEmail } from "../../../../redux/slices/userSlice";

import ReactPaginate from 'react-paginate';

const TableUser = (props) => {
    const { setModalAddUser, handleClickBtnUpdate, handleClickBtnDelete } = props
    const [role, setRole] = useState("all");
    const [email, setEmail] = useState("");
    const [type, setType] = useState("");
    const [page, setPage] = useState(1);
    const limit = 7;

    const dispatch = useDispatch();

    const listUsers = useSelector(state => state.user.listUsers);

    useEffect(() => {
        dispatch(fetchAllUsers({ page, limit }))
    }, [])


    useEffect(() => {
        setType("search");
        dispatch(fetchAllUsers({ page, limit, type, email }))
    }, [email])


    useEffect(() => {
        setType("filter");
    }, [role])


    const handleFileterRole = async () => {
        dispatch(fetchAllUsers({ page, limit, type, role }))
    }


    const handlePageClick = (event) => {
        const page = (event.selected) + 1;
        dispatch(fetchAllUsers({ page, limit, type, email, role }))
    };


    return (
        <>
            <div className="box-table">
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
                            onFocus={() => setType("search")}
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
                        {listUsers.data && listUsers.data.length > 0 &&
                            listUsers.data.map((user, index) => {
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

                        {listUsers && listUsers.length == 0 &&
                            <tr>
                                <td colSpan={'7'}>Not Found data</td>
                            </tr>
                        }
                    </tbody>
                </table>
                <div className="row-3">
                    {listUsers.totalPages >= 2 ?
                        <ReactPaginate
                            nextLabel={<BiChevronsRight />}
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={1}
                            marginPagesDisplayed={1}
                            pageCount={listUsers.totalPages}
                            previousLabel={<BiChevronsLeft />}
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="paginationn"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                        />
                        : ""
                    }

                </div>
            </div>
        </>
    );
}

export default TableUser;