import styles from "./blogView.module.scss";
import { Blog } from "../../models/blog";
import BlogViewItem from "./BlogViewItem";
import { useActions } from "../../hooks/useActions";
import _ from "lodash";
// import { useState } from "react";

const BlogView: React.FC<{
  blog: Blog;
  onClose: () => void;
  editVew: boolean;
}> = ({ blog, onClose, editVew }) => {
  // const [editView, setEditView] = useState<boolean>(editVew);
  let editedBlogs = _.cloneDeep(blog);

  const { updateBlogAsync } = useActions();

  const closeEditBlogHandler = () => {
    onClose();
  };

  const editBlogHandler = (index: any, data: any) => {
    editedBlogs.blogs.fieldValues[index] = data;
  };

  const blogUpdateHandler = () => {
    updateBlogAsync(editedBlogs);
  };

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
        {!editVew && (
          <button className={styles.update_btn} onClick={blogUpdateHandler}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogView;
