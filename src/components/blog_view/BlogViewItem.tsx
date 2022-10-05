import { useState } from "react";
import parse from "html-react-parser";
import styles from "./blogViewItem.module.scss";

const BlogViewItem: React.FC<{
  fType: string;
  fValue: string;
  editVewItem: boolean;
  intemIndex: any;
  editHandler: (index: string, data: any) => void;
}> = ({ fType, fValue, editVewItem, intemIndex, editHandler }) => {
  let cmp = null;
  const [currentFValue, setCurrentFValue] = useState(fValue);

  const fieldEditHandler = (event: any) => {
    setCurrentFValue(event.target.value);
    editHandler(intemIndex, event.target.value);
  };

  if (fType === "header") {
    if (!editVewItem) {
      cmp = (
        <>
          <label htmlFor={`header_${intemIndex}`} className={styles.edit_label}>
            Title
          </label>
          <h1>
            <textarea
              className={styles.form_input}
              id={`header_${intemIndex}`}
              placeholder="Title"
              rows={1}
              value={currentFValue}
              onChange={fieldEditHandler}
            />
          </h1>
        </>
      );
    } else {
      cmp = <h1>{fValue}</h1>;
    }
  }

  if (fType === "sub_header") {
    if (!editVewItem) {
      cmp = (
        <>
          <label
            htmlFor={`sub_header_${intemIndex}`}
            className={styles.edit_label}
          >
            Sub Title
          </label>
          <h2>
            <textarea
              className={styles.form_input}
              id={`sub_header_${intemIndex}`}
              placeholder="Sub Title"
              rows={2}
              value={currentFValue}
              onChange={fieldEditHandler}
            />
          </h2>
        </>
      );
    } else {
      cmp = <h2>{fValue}</h2>;
    }
  }

  if (fType === "text_content") {
    if (!editVewItem) {
      cmp = (
        <>
          <label
            htmlFor={`text_content_${intemIndex}`}
            className={styles.edit_label}
          >
            Content
          </label>
          <h2>
            <textarea
              className={styles.form_input}
              id={`text_content_${intemIndex}`}
              placeholder="Content"
              rows={6}
              value={currentFValue}
              onChange={fieldEditHandler}
            />
          </h2>
        </>
      );
    } else {
      cmp = parse(`<p>${fValue}</p>`);
    }
  }

  return <div>{cmp}</div>;
};

export default BlogViewItem;
