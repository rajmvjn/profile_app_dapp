import styles from "./ad.module.scss";

const AdminDashboard: React.FC<{}> = () => {
  return (
    <div className={styles.ad}>
      <div className={styles.ad_content}>this is the admin dsahboard</div>
    </div>
  );
};

export default AdminDashboard;
