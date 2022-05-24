import { useAppSelector } from "../../store";
import { useActions } from "../../hooks/useActions";

import styles from "./commentList.module.scss";

const CommentsList: React.FC = () => {
  const { comments } = useAppSelector((state) => state.comment);

  const { deleteCommentAsync } = useActions();

  const deleteHandler = (id: any) => {
    deleteCommentAsync(id);
  };

  return (
    <div className={styles.comment_content}>
      <ul className={styles.comment_list}>
        {comments.map((comment) => (
          <li key={comment._id} className={styles.comment_list_item}>
            <span className="item_detail">{comment.name}</span>
            <span className="item_detail">{comment.email}</span>
            <span className="item_detail">{comment.phone}</span>
            <span className="item_detail">
              <span>{comment.comment} </span>
              <span
                className={styles.comment_del}
                onClick={deleteHandler.bind(this, comment._id)}
              >
                X
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
