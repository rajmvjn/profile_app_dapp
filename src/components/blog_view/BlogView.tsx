import styles from "./blogView.module.scss";
import { Blog } from "../../models/blog";
import BlogViewItem from "./BlogViewItem";
// import { useState } from "react";

const BlogView: React.FC<{
  blog: Blog;
  onClose: () => void;
  editVew: boolean;
}> = ({ blog, onClose, editVew }) => {
  // const [editView, setEditView] = useState<boolean>(editVew);

  const closeEditBlogHandler = () => {
    onClose();
  };

  const editBlogHandler = (index: string, data: any) => {};

  return (
    <div className={styles.blog_view}>
      <span className={styles.close_btn} onClick={onClose}>
        X
      </span>
      <div className={styles.blog_view_content}>
        {!editVew && (
          <button className={styles.btn_edit} onClick={closeEditBlogHandler}>
            Cancel
          </button>
        )}
        {blog.blogs.fieldTypes.map((fieldType: any, index: any) => {
          return (
            <div key={index}>
              <BlogViewItem
                fType={fieldType}
                fValue={blog.blogs.fieldValues[index]}
                editVewItem={editVew}
                intemIndex={index}
                editHandler={editBlogHandler}
              />
            </div>
          );
        })}
        {!editVew && <button className={styles.update_btn}>Update</button>}
      </div>
    </div>
  );
};

export default BlogView;
