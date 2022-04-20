import styles from "./footer.module.scss";
import family from "../../assets/images/family.jpg";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_image}>
        <img src={family} alt="footer" className={styles.footer_image_family} />
      </div>
      <div className={styles.footer_content}>
        <div className={styles.footer_content_links}>
          <ul className={styles.footer_list}>
            <li className={styles.footer_list_item}>dApps</li>
            <li className={styles.footer_list_item}>Connect</li>
            <li className={styles.footer_list_item}>Home</li>
            <li className={styles.footer_list_item}>About</li>
          </ul>
        </div>
        <div className={styles.footer_copyright}>
          <p className={styles.footer_copyright_content}>
            Copyright &copy; by{" "}
            <button className={styles.footer_copyright_name}>
              Rajesh Vijayan.
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
