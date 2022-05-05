import styles from "./footer.module.scss";
import family from "../../assets/images/family.jpg";
import API_ENDPOINTS from "../../constants/apiEndPoints";

const Footer: React.FC<{
  dappRef: any;
  homeRef: any;
  connectRef: any;
  aboutRef: any;
  onScroll: (ref: any) => void;
}> = (props) => {
  const profileNavHandler = () => {
    window.open(API_ENDPOINTS.GITHUB_PROFILE, "_blank");
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footer_image}>
        <img src={family} alt="footer" className={styles.footer_image_family} />
      </div>
      <div className={styles.footer_content}>
        <div className={styles.footer_content_links}>
          <ul className={styles.footer_list}>
            <li
              className={styles.footer_list_item}
              onClick={() => props.onScroll(props.dappRef)}
            >
              dApps
            </li>
            <li
              className={styles.footer_list_item}
              onClick={() => props.onScroll(props.connectRef)}
            >
              Connect
            </li>
            <li
              className={styles.footer_list_item}
              onClick={() => props.onScroll(props.homeRef)}
            >
              Home
            </li>
            <li
              className={styles.footer_list_item}
              onClick={() => props.onScroll(props.aboutRef)}
            >
              About
            </li>
          </ul>
        </div>
        <div className={styles.footer_copyright}>
          <p className={styles.footer_copyright_content}>
            Copyright &copy; by{" "}
            <button
              className={styles.footer_copyright_name}
              onClick={profileNavHandler}
            >
              Rajesh Vijayan.
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
