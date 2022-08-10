import styles from "./blog.module.scss";
import { useNavigate } from "react-router-dom";

import { useActions } from "../../hooks/useActions";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../store";
import BlogView from "../../components/blog_view/BlogView";
import { Blog } from "../../models/blog";
import imgEdit from "../../assets/images/svgs/compose.svg";
import imgDel from "../../assets/images/svgs/trash.svg";
import ConfirmModal from "../../components/confirm_modal/ConfirmModal";

const BlogC = () => {
  const { getBlogsAsync, deleteBlogAsync } = useActions();
  const [blogView, setBlogView] = useState<boolean>(false);
  const [confirmModal, setConfirmModal] = useState<boolean>(false);
  const [confirmId, setConfirmId] = useState<string>("");
  const [blog, setBlog] = useState<any>();

  useEffect(() => {
    getBlogsAsync();
  }, []);

  const allBlogs: any = useAppSelector((state) => state.blogs.blogs);

  const naviagte = useNavigate();
  const blogCreateHandler = () => {
    naviagte("/doblog");
  };
  const navigateHome = () => {
    naviagte("/");
  };

  const blogViewHandler = (sBlog: Blog) => {
    setBlogView(true);
    setBlog(sBlog);
  };

  const closeHandler = () => {
    setBlogView(false);
  };

  const openConfirmHandler = (id: any) => {
    setConfirmModal(true);
    setConfirmId(id);
  };

  const deleteBlogHandler = () => {
    deleteBlogAsync(confirmId);
    setConfirmModal(false);
    setConfirmId("");
  };

  const closeModalHandler = () => {
    setConfirmModal(false);
    setConfirmId("");
  };

  const blogList =
    allBlogs &&
    allBlogs.map((blog: any, index: any) => {
      return (
        <li className={styles.blogs_list} key={index}>
          <span
            className={styles.blogs_list_text + " " + styles.head_list_blog}
            onClick={blogViewHandler.bind(null, blog)}
          >
            {blog.blogs?.fieldValues[0]}
          </span>
          <span className={styles.blogs_list_user}>...</span>
          <div className={styles.blogs_list_action}>
            <span className={styles.icon_edit}>
              <img src={imgEdit} alt="edit" />
            </span>
            <span
              className={styles.icon_delete}
              onClick={openConfirmHandler.bind(null, blog._id)}
            >
              <img src={imgDel} alt="delete" />
            </span>
          </div>
        </li>
      );
    });

  return (
    <>
      {confirmModal && (
        <ConfirmModal
          header={"Are You Sure?"}
          b1Text={"Cancel"}
          b2Text={"Yes"}
          onClose={closeModalHandler}
          onConfirm={deleteBlogHandler}
        />
      )}
      {blogView && <BlogView blog={blog} onClose={closeHandler} />}
      <div className={styles.blog}>
        <div className={styles.header}>
          <div className={styles.home} onClick={navigateHome}>
            Home
          </div>
          <h1 className={styles.header_text}>Blogs</h1>
          <button className={styles.create_btn} onClick={blogCreateHandler}>
            {" "}
            <span className={styles.create_icon}>+</span> Create
          </button>
        </div>

        <ul>
          <li className={styles.blogs_list + " " + styles.head_list}>
            <span className={styles.head_list_blog}>Blog</span>
            <span className={styles.head_list_user}>User</span>
            <span className={styles.head_list_action}>Action</span>
          </li>
          {blogList}
        </ul>
      </div>
    </>
  );
};

export default BlogC;
