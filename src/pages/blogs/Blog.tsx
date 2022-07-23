import styles from "./blog.module.scss";
import { useNavigate } from "react-router-dom";

import { useActions } from "../../hooks/useActions";
import { useEffect } from "react";
import { useAppSelector } from "../../store";
// import { Blog } from "../../models/Blog";

const Blog = () => {
  const { getBlogsAsync } = useActions();

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

  const blogList =
    allBlogs.length &&
    allBlogs.map((blog: any, index: any) => {
      return (
        <li className={styles.blogs_list} key={index}>
          <span className={styles.head_list_text + " " + styles.head_list_blog}>
            {blog.blogs.fieldValues[0]}
          </span>
          <span className={styles.head_list_user}>User</span>
          <span className={styles.head_list_text}>Del</span>
        </li>
      );
    });

  return (
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
  );
};

export default Blog;
