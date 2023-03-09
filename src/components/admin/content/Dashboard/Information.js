import { useEffect, } from "react";
import { BiUser, BiCategory, BiBookOpen, BiBarChartAlt2 } from "react-icons/bi";

import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers } from "../../../../redux/slices/userSlice";

const Information = (props) => {

    const dispatch = useDispatch();
    const listUsers = useSelector(state => state.user.listUsers);
    const page = 1;
    const limit = 7;

    useEffect(() => {
        dispatch(fetchAllUsers({ page, limit }))
    }, [])


    return (
        <>
            <ul class="row-1 box-dash">
                <li>
                    <div class="box-left">
                        <h3>{listUsers.totalUsers}</h3>
                        <span>Users</span>
                    </div>
                    <div class="box-right">
                        <BiUser
                            className="icon"
                        />
                    </div>
                </li>
                <li>
                    <div class="box-left">
                        <h3>59</h3>
                        <span>Post</span>
                    </div>
                    <div class="box-right">
                        <BiBookOpen
                            className="icon"
                        />
                    </div>
                </li>
                <li>
                    <div class="box-left">
                        <h3>75</h3>
                        <span>Product</span>
                    </div>
                    <div class="box-right">
                        <BiBarChartAlt2
                            className="icon"
                        />
                    </div>
                </li>
                <li>
                    <div class="box-left">
                        <h3>23</h3>
                        <span>Blog</span>
                    </div>
                    <div class="box-right">
                        <BiCategory
                            className="icon"
                        />
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Information;