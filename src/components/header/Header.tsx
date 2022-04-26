import styles from "./header.module.scss";

const Header: React.FC<{ dappRef: any }> = (props) => {
  return (
    <div className={styles.header} ref={props.dappRef}>
      <div className={styles.header_content}>
        <div className={styles.header_content_logo}>&nbsp;</div>
        <h1 className={styles.header_content_h1}>
          <span className={styles.header_content_h1_span}>
            <span className={styles.header_content_h1_span_1}>
              Web Developer{" "}
            </span>
            <span className={styles.u_sep}>| </span>
            <span className={styles.header_content_h1_span_2}>
              MERN Expert{" "}
            </span>{" "}
            <span className={styles.u_sep}>| </span>
            <span className={styles.header_content_h1_span_3}>
              Blockchain Enthusiast{" "}
            </span>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
