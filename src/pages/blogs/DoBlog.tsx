import styles from "./doBlog.module.scss";
import React, { useRef, useState } from "react";
import { useAppSelector } from "../../store";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
// import { Blog } from "../../models/blog";
let photoList: any[] = [];

const DoBlog = () => {
  const navigate = useNavigate();
  const headerRef = useRef<HTMLTextAreaElement>(null);
  const subHeaderRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const photoRef = useRef<HTMLInputElement>(null);
  const selectedFieldType = useRef<HTMLSelectElement>(null);
  const [fieldTypes, setFieldTypes] = useState<string[]>([]);

  const [fieldType, setFieldType] = useState("header");
  const [fieldValues, setFieldValues] = useState<any[]>([]);

  // const { user } = useAppSelector((state) => state.user);
  // const { requstStatus } = useAppSelector((state) => state.httpReqStatus);
  // console.log("fuck");
  // console.log(requstStatus);
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
    const formData = new FormData();
    for (let i = 0; i < photoList.length; i++) {
      formData.append("photos", photoList[i]);
    }
    photoList = [];
    const blog: any = {
      userId: "user._id",
      blogs: {
        fieldTypes,
        fieldValues,
      },
    };
    formData.append("blog", JSON.stringify(blog));
    const wgr: any = postBlogAsync(formData, "multipart/form-data");
    try {
    } catch (error) {}
    wgr
      .then((data: any) => {
        console.log(wgr);
        navigateListing();
      })
      .catch((err: any) => navigateListing());
  };

  const removeFieldHandler = (index: number) => {
    const newFieldValues = [...fieldValues];
    newFieldValues.splice(index, 1);
    setFieldValues(newFieldValues);

    const newfieldTypes = [...fieldTypes];
    newfieldTypes.splice(index, 1);
    setFieldTypes(newfieldTypes);

    photoList.splice(index, 1);
  };

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setFieldTypes((oldList: string[]) => [...oldList, fieldType]);
    let currentFieldValue: any = "";
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
      case "photo":
        let file: any = photoRef.current!.files;
        photoList.push(file[0]);
        console.log(photoList);
        currentFieldValue = URL.createObjectURL(file[0]);
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
        <h1 className={styles.header}>Create blog, use below controls.</h1>
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
            <div>
              <div className={styles.note}>
                <b>Note:</b> {` For a new paragraph, please start with <p>.`}
              </div>
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
            </div>
          )}
          {
            fieldType === "photo" && (
              <div className={styles.form_group}>
                <input
                  type="file"
                  accept="image/*"
                  title="Upload Image"
                  className={styles.photo_upload}
                  ref={photoRef}
                />
              </div>
            )
            /*             
            video upload
          */
          }
          <button className={styles.add_content}>Add</button>
        </form>
      </div>
      <div>
        {fieldTypes.map((blogItem, index) => {
          return (
            <div key={index} className={styles.blog_field_content}>
              {blogItem !== "photo" ? (
                fieldValues[index]
              ) : (
                <div className={styles.img_cntr}>
                  <img
                    className={styles.preview_img}
                    alt="img"
                    src={fieldValues[index]}
                  />
                </div>
              )}
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
