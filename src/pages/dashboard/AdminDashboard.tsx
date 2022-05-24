import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import CommentsList from "../../components/comments/CommentsList";
import DappsList from "../../components/dapps/DappsList";

import { useActions } from "../../hooks/useActions";

import styles from "./ad.module.scss";

const AdminDashboard: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("C");

  const { getCommentsAsync } = useActions();

  useEffect(() => {
    if (selectedTab === "C") {
      getCommentsAsync();
    }
  }, []);

  const navigateHome = () => {
    navigate("/");
  };

  const toggleTab = (tab: string) => {
    setSelectedTab(tab);
  };

  const logoutHandler = () => {
    sessionStorage.removeItem("token");
    navigateHome();
  };

  return (
    <div className={styles.cotainer}>
      <div className={styles.admin_header}>
        <div className={styles.admin_header_home} onClick={navigateHome}>
          &#8592;Home
        </div>
        <h1 className={styles.admin_header_content}>Admin Dashboard</h1>
        <div className={styles.logout} onClick={logoutHandler}>
          Logout &#8594;
        </div>
      </div>
      <div className={styles.admin_content}>
        <div className={styles.admin_content_tab}>
          <div
            onClick={toggleTab.bind(null, "C")}
            className={
              styles.admin_content_tab_item +
              " " +
              (selectedTab === "C" ? styles.admin_content_tab_active : "")
            }
          >
            Comments
          </div>
          <div
            onClick={toggleTab.bind(null, "D")}
            className={
              styles.admin_content_tab_item +
              " " +
              (selectedTab === "D" ? styles.admin_content_tab_active : "")
            }
          >
            dApps
          </div>
        </div>
        <div className={styles.admin_content_tab_content}>
          {selectedTab === "C" && <CommentsList />}
          {selectedTab === "D" && <DappsList />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
