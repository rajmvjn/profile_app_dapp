import styles from "./Toast.module.scss";

const Toast: React.FC<{ msg: string }> = ({ msg }) => {
  return <div className={styles.toast_container}>{msg}</div>;
};

export default Toast;
