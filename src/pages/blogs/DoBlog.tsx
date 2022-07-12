import styles from "./doBlog.module.scss";
import React, { useRef, useState } from "react";

const DoBlog = () => {
  const headerRef = useRef<HTMLTextAreaElement>(null);
  const subHeaderRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const selectedFieldType = useRef<HTMLSelectElement>(null);
  const [blogList, setBlogList] = useState<string[]>([]);

  const [fieldType, setFieldType] = useState("header");
  const [fieldValues, setFieldValues] = useState<string[]>([]);

  const fieldChangeHandler = () => {
    setFieldType(selectedFieldType.current!.value);
  };

  const removeFieldHandler = (index: number) => {
    const newFieldValues = [...fieldValues];
    newFieldValues.splice(index, 1);
    setFieldValues(newFieldValues);

    const newBlogList = [...blogList];
    newBlogList.splice(index, 1);
    setBlogList(newBlogList);
  };

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setBlogList((oldList: string[]) => [...oldList, fieldType]);
    let currentFieldValue: string = "";
    switch (fieldType) {
      case "header":
        currentFieldValue = headerRef.current!.value;
        break;
      case "sub_header":
        currentFieldValue = subHeaderRef.current!.value;
        break;
      case "text_content":
        currentFieldValue = contentRef.current!.value;
        console.log(currentFieldValue);
        break;
    }
    setFieldValues((oldValues: string[]) => [...oldValues, currentFieldValue]);
    console.log(fieldValues);
    console.log(blogList);
  };

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

      <div className={styles.add_blog_control}>
        <form action="#" className="blog_form" onSubmit={formSubmitHandler}>
          <label
            htmlFor="blog_type"
            className={styles.types + " " + styles.form_label}
          >
            Blog Field Type
          </label>
          <select
            name="blog_type"
            id="blog_type"
            className={styles.select}
            onChange={fieldChangeHandler}
            ref={selectedFieldType}
          >
            <option value="header">Header</option>
            <option value="sub_header">Sub Header</option>
            <option value="text_content">Text Content</option>
            <option value="photo">Photo</option>
            <option value="video">Video</option>
          </select>

          {fieldType === "header" && (
            <div className={styles.form_group}>
              <label htmlFor="header" className={styles.form_label}>
                Header
              </label>
              <textarea
                className={styles.form_input + " " + styles.blog_contents}
                id="header"
                placeholder="Enter Header"
                rows={3}
                ref={headerRef}
              ></textarea>
            </div>
          )}

          {fieldType === "sub_header" && (
            <div className={styles.form_group}>
              <label htmlFor="sub_header" className={styles.form_label}>
                Sub Header
              </label>
              <textarea
                className={styles.form_input + " " + styles.blog_contents}
                id="sub_header"
                placeholder="Enter Sub Header"
                rows={3}
                ref={subHeaderRef}
              ></textarea>
            </div>
          )}

          {fieldType === "text_content" && (
            <div className={styles.form_group}>
              <label htmlFor="text-content" className={styles.form_label}>
                Text Content
              </label>
              <textarea
                className={styles.form_input + " " + styles.blog_contents}
                id="text_content"
                placeholder="Enter Content"
                rows={3}
                ref={contentRef}
              ></textarea>
            </div>
          )}
          {/* 
            photo upload 
            video upload
          */}
          <button className={styles.add_content}>Add</button>
        </form>
      </div>
      <div>
        {blogList.map((blogItem, index) => {
          return (
            <div key={index} className={styles.blog_field_content}>
              {fieldValues[index]}{" "}
              <span
                onClick={removeFieldHandler.bind(null, index)}
                className={styles.remove_btn}
              >
                X
              </span>
            </div>
          );
        })}
      </div>
      <div className={styles.submit_blog_container}>
        {blogList.length > 0 && (
          <button className={styles.submit_blog}>Create Blog</button>
        )}
      </div>
    </div>
  );
};

export default DoBlog;
