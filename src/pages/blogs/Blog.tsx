import styles from "./blog.module.scss";
import { useNavigate } from "react-router-dom";

import { useActions } from "../../hooks/useActions";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../store";
import BlogView from "../../components/blog_view/BlogView";
import { Blog } from "../../models/blog";

const BlogC = () => {
  const { getBlogsAsync } = useActions();
  const [blogView, setBlogView] = useState<boolean>(false);
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

  const blogViewHandler = (sBlog: Blog, id: any) => {
    setBlogView(true);
    setBlog(sBlog);
  };

  const closeHandler = () => {
    setBlogView(false);
  };

  const blogList =
    allBlogs.length &&
    allBlogs.map((blog: any, index: any) => {
      return (
        <li className={styles.blogs_list} key={index}>
          <span
            className={styles.head_list_text + " " + styles.head_list_blog}
            onClick={blogViewHandler.bind(this, blog)}
          >
            {blog.blogs.fieldValues[0]}
          </span>
          <span className={styles.head_list_user}>User</span>
          <span className={styles.head_list_text}>Del</span>
        </li>
      );
    });

  return (
    <>
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
