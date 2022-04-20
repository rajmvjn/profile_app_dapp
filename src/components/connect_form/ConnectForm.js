import styles from "./connectform.module.scss";

const ConnectForm = () => {
  return (
    <div className={styles.main_connect_content}>
      <form action="#" className={styles.mail_connect_content_form}>
        <div className={styles.form_group}>
          <input
            type="text"
            className={styles.form_input}
            id="name"
            placeholder="Full name"
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
          ></textarea>
          <label htmlFor="comment" className={styles.form_label}>
            Comments
          </label>
        </div>

        <div className={styles.form_group}>
          <button className={[styles.btn, styles.btnb_lue].join(" ")}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConnectForm;
