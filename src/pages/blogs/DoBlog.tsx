import styles from "./doBlog.module.scss";

const DoBlog = () => {
  const addHeaderHandler = () => {};

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        Create Your Blog, Use the below controls.
      </h1>
      {/* <div className={styles.controls}>
        <button className={styles.primary_header}>Header</button>
        <button className={styles.sub_header}>Sub Header</button>
        <button className={styles.content_text}>Content</button>
        <button className={styles.content_photo}>Photo</button>
        <button className={styles.content_video}>Video</button>
      </div> */}

      <div className="add_blog_control">
        <form action="#" className="blog_form">
          <label htmlFor="blog_type" className="type">
            Field Type
          </label>
          <select name="blog_type" id="blog_type">
            <option value="header">Header</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default DoBlog;
