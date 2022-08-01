import styles from "./blogView.module.scss";
import { Blog } from "../../models/blog";
import BlogViewItem from "./BlogViewItem";

const BlogView: React.FC<{ blog: Blog; onClose: () => void }> = ({
  blog,
  onClose,
}) => {
  return (
    <div className={styles.blog_view}>
      <span className={styles.close_btn} onClick={onClose}>
        X
      </span>
      <div className={styles.blog_view_content}>
        {blog.blogs.fieldTypes.map((fieldType: any, index: any) => {
          return (
            <div key={index}>
              <BlogViewItem
                fType={fieldType}
                fValue={blog.blogs.fieldValues[index]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogView;
