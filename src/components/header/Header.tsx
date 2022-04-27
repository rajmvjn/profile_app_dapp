import { useState } from "react";
import styles from "./header.module.scss";
import pdf from "../../assets/docs/rajesh.pdf";

const Header: React.FC<{
  homeRef: any;
  dappRef: any;
  connectRef: any;
  aboutRef: any;
  onScroll: (ref: any) => void;
}> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const profileHandler = () => {
    window.open(pdf);
  };

  const toggleMenu = () => {
    setIsOpen((preState) => !preState);
  };

  return (
    <div className={styles.header} ref={props.homeRef}>
      <div className={styles.header_hamburger} onClick={toggleMenu}>
        <span
          className={
            isOpen ? styles.icon + " " + styles.icon_close : styles.icon
          }
        >
          &nbsp;
        </span>
      </div>
      <div
        onClick={toggleMenu}
        className={
          isOpen
            ? styles.header_nav + " " + styles.header_nav_show
            : styles.header_nav
        }
      >
        <ul className={styles.nav}>
          <li
            className={styles.nav_item}
            onClick={() => props.onScroll(props.dappRef)}
          >
            dApps
          </li>
          <li
            className={styles.nav_item}
            onClick={() => props.onScroll(props.connectRef)}
          >
            Connect
          </li>
          <li
            className={styles.nav_item}
            onClick={() => props.onScroll(props.aboutRef)}
          >
            About
          </li>
          <li className={styles.nav_item}>Admin</li>
          <li className={styles.nav_item}>
            <div className={styles.avatar} onClick={profileHandler}>
              &nbsp;
            </div>
          </li>
        </ul>
      </div>
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
