import styles from "./blog.module.scss";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const naviagte = useNavigate();
  const blogCreateHandler = () => {
    naviagte("/doblog");
  };

  return (
    <div className={styles.blog}>
      <div className={styles.header}>
        <h1 className={styles.header_text}>Your Blogs</h1>
        <button className={styles.create_btn} onClick={blogCreateHandler}>
          {" "}
          <span className={styles.create_icon}>+</span> Create
        </button>
      </div>
    </div>
  );
};

export default Blog;
