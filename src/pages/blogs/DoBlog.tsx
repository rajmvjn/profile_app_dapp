import styles from "./doBlog.module.scss";
import React, { useRef, useState } from "react";
import { useAppSelector } from "../../store";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { Blog } from "../../models/blog";

const DoBlog = () => {
  const navigate = useNavigate();
  const headerRef = useRef<HTMLTextAreaElement>(null);
  const subHeaderRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const selectedFieldType = useRef<HTMLSelectElement>(null);
  const [fieldTypes, setFieldTypes] = useState<string[]>([]);

  const [fieldType, setFieldType] = useState("header");
  const [fieldValues, setFieldValues] = useState<string[]>([]);

  const { user } = useAppSelector((state) => state.user);
  const { postBlogAsync } = useActions();

  const navigateHome = () => {
    navigate("/");
  };

  const navigateListing = () => {
    navigate("/blogs");
  };

  const fieldChangeHandler = () => {
    setFieldType(selectedFieldType.current!.value);
  };

  const blogCreateHandler = () => {
    const blog: Blog = {
      userId: user._id,
      blogs: {
        fieldTypes,
        fieldValues,
      },
    };
    postBlogAsync(blog);
  };

  const removeFieldHandler = (index: number) => {
    const newFieldValues = [...fieldValues];
    newFieldValues.splice(index, 1);
    setFieldValues(newFieldValues);

    const newfieldTypes = [...fieldTypes];
    newfieldTypes.splice(index, 1);
    setFieldTypes(newfieldTypes);
  };

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setFieldTypes((oldList: string[]) => [...oldList, fieldType]);
    let currentFieldValue: string = "";
    switch (fieldType) {
      case "header":
        currentFieldValue = headerRef.current!.value;
        headerRef.current!.value = "";
        break;
      case "sub_header":
        currentFieldValue = subHeaderRef.current!.value;
        subHeaderRef.current!.value = "";
        break;
      case "text_content":
        currentFieldValue = contentRef.current!.value;
        contentRef.current!.value = "";
        break;
    }
    setFieldValues((oldValues: string[]) => [...oldValues, currentFieldValue]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <div className={styles.back} onClick={navigateListing}>
          {" "}
          Back{" "}
        </div>
        <h1 className={styles.header}>Create your blog, use below controls.</h1>
        <div className={styles.home} onClick={navigateHome}>
          Home
        </div>
      </div>

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
            <option value="header">Title</option>
            <option value="sub_header">Sub Title</option>
            <option value="text_content">Content</option>
            <option value="photo">Photo</option>
            <option value="video">Video</option>
          </select>

          {fieldType === "header" && (
            <div className={styles.form_group}>
              {/* <label htmlFor="header" className={styles.form_label}>
                Title
              </label> */}
              <textarea
                className={styles.form_input + " " + styles.blog_contents}
                id="header"
                placeholder="Enter Title"
                rows={3}
                ref={headerRef}
              ></textarea>
            </div>
          )}

          {fieldType === "sub_header" && (
            <div className={styles.form_group}>
              {/* <label htmlFor="sub_header" className={styles.form_label}>
                Sub Title
              </label> */}
              <textarea
                className={styles.form_input + " " + styles.blog_contents}
                id="sub_header"
                placeholder="Enter Sub Title"
                rows={3}
                ref={subHeaderRef}
              ></textarea>
            </div>
          )}

          {fieldType === "text_content" && (
            <div className={styles.form_group}>
              {/* <label htmlFor="text-content" className={styles.form_label}>
                Content
              </label> */}
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
        {fieldTypes.map((blogItem, index) => {
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
        {fieldTypes.length > 0 && (
          <button className={styles.submit_blog} onClick={blogCreateHandler}>
            Create Blog
          </button>
        )}
      </div>
    </div>
  );
};

export default DoBlog;
