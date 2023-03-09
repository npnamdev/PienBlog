import { useState } from 'react';
import TablePost from "./TablePost";
import ModalAddPost from "./ModalAddPost";

const ManagePost = (props) => {
    const [modalAddPost, setModalAddPost] = useState(false);
    return (
        <div id="content">
            <h2>Manage Post</h2>
            <TablePost
                setModalAddPost={setModalAddPost}
            />
            <ModalAddPost
                modalAddPost={modalAddPost}
                setModalAddPost={setModalAddPost}
            />
        </div>
    );
}

export default ManagePost;