import { BiPlusCircle, BiEdit, BiTrash } from "react-icons/bi";

const ManagePost = (props) => {
    return (
        <div id="content">
            <h2>Manage Post</h2>
            <div class="box-table-post">
                <div class="row-1">
                    <div class="box-left">
                        <select>
                            <option value="">All Catagory</option>
                            <option value="">Sự kiện</option>
                            <option value="">Xã hội</option>
                            <option value="">Thế giới</option>
                        </select>
                        <button>Apply</button>
                    </div>
                    <div class="box-right">
                        <button>
                            <BiPlusCircle
                                className="icon-add"
                            />
                            Add Post
                        </button>
                    </div>
                </div>
                <table class="row-2">
                    <thead>
                        <tr class="col-title">
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Catagory</th>
                            <th>Author</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                Ngành gì đang hot hiện nay? Top ngành nghề dự báo
                            </td>
                            <td>
                                Nếu bạn đang phân vân trong việc chọn ngành, chuyển ngành thì có thể tham khảo bài
                            </td>
                            <td>Thể thao</td>
                            <td>haiyen</td>
                            <td>
                                <BiEdit
                                    className="icon-edit icon"
                                />
                                <BiTrash
                                    className="icon-delete icon"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ManagePost;