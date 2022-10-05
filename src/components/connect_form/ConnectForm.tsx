import React, { useRef } from "react";
import styles from "./connectform.module.scss";
import Comment from "../../models/comment";
import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../store";

const ConnectForm: React.FC = () => {
  const { postCommentAsync } = useActions();
  const reqStatus = useAppSelector((state) => state.httpReqStatus.requstStatus);

  const contactFormRef = useRef<HTMLDivElement>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const commentRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    let comment: Comment;
    event.preventDefault();
    comment = {
      name: nameRef.current!.value,
      email: emailRef.current!.value,
      phone: phoneRef.current!.value,
      comment: commentRef.current!.value,
    };
    postCommentAsync(comment);
  };

  return (
    <div
      className={styles.main_connect_content}
      onSubmit={submitHandler}
      ref={contactFormRef}
    >
      <form action="#" className={styles.mail_connect_content_form}>
        <div className={styles.form_group}>
          <input
            type="text"
            className={styles.form_input}
            id="name"
            placeholder="Full name"
            ref={nameRef}
            required
          />
          <label htmlFor="name" className={styles.form_label}>
            Full name
          </label>
        </div>
        <div className={styles.form_group}>
          <input
            type="email"
            className={styles.form_input}
            id="email"
            placeholder="E mail"
            ref={emailRef}
          />
          <label htmlFor="email" className={styles.form_label}>
            E mail
          </label>
        </div>

        <div className={styles.form_group}>
          <input
            type="number"
            className={styles.form_input}
            id="phone"
            placeholder="Phone"
            ref={phoneRef}
          />
          <label htmlFor="phone" className={styles.form_label}>
            Phone
          </label>
        </div>

        <div className={styles.form_group}>
          <textarea
            className={styles.form_input}
            id="comment"
            placeholder="Comments"
            rows={3}
            ref={commentRef}
          ></textarea>
          <label htmlFor="comment" className={styles.form_label}>
            Comments
          </label>
        </div>

        <div className={styles.form_group}>
          <button className={[styles.btn, styles.btnb_lue].join(" ")}>
            Submit
          </button>
          {reqStatus.message && (
            <span className={styles.connect_success_msg}>
              Comment saved successfully
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default ConnectForm;
