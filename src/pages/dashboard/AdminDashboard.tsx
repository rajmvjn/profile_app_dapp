import styles from "./ad.module.scss";

const AdminDashboard: React.FC<{}> = () => {
  return (
    <div className={styles.cotainer}>
      <div className={styles.ad}>
        <div className={styles.ad_tabs}>
          <div
            className={styles.ad_tabs_item + " " + styles.ad_tabs_item_active}
          >
            connects
          </div>
          <div className={styles.ad_tabs_item}>dApps</div>
        </div>
        <div className={styles.ad_content}>Content</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
