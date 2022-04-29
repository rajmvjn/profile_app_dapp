import styles from "./dashboard.module.scss";
import myPic from "../../assets/images/me.jpg";
import DappCard from "../../components/card/DappCard";
import ConnectForm from "../../components/connect_form/ConnectForm";
import DAPP from "../../models/dapp";

const dappList: DAPP[] = [
  {
    _id: "1",
    name: "The Auction Contract",
    description: ["Auction Contract", "Be the admin", "sell your products"],
  },
  {
    _id: "2",
    name: "Your crowd funding",
    description: [
      "Get fund your project",
      "Create any number of project",
      "Get fund in phases",
    ],
  },
  {
    _id: "3",
    name: "Make your own ICO",
    description: [
      "Your first coin offering",
      "Test in testnet",
      "Transfer to your wallet",
    ],
  },
];

const Dashboard: React.FC<{ dappRef?: any; connectRef: any; aboutRef: any }> = (
  props
) => {
  return (
    <main className={styles.main}>
      <section className={styles.main_dapps} ref={props.dappRef}>
        <h2 className={styles.main_h2_title}>explore decentralized apps</h2>
        <div className={styles.main_dapps_container}>
          <DappCard dapps={dappList} />
        </div>
      </section>
      <section className={styles.main_connect} ref={props.connectRef}>
        <h2 className={styles.main_h2_title}>connect</h2>
        <ConnectForm />
      </section>
      <section className={styles.main_about} ref={props.aboutRef}>
        <h2 className={styles.main_h2_title}>about me</h2>-
        <div className={styles.main_about_content}>
          <figure className={styles.main_about_content_shape}>
            <img
              src={myPic}
              alt="myPic"
              className={styles.main_about_content_img}
            />
            <figcaption className={styles.main_about_content_caption}>
              Rajesh Vijayan
            </figcaption>
          </figure>
          <div className={styles.main_about_content_text}>
            <h3 className={styles.main_about_content_text_head}>
              I Rajesh, a son, a brother, a husband, a father, a friend and a
              developer
            </h3>
            <p className={styles.main_about_content_text_pgh}>
              I love hanging with family, I love sit back and just look at life,
              I love travel, love reading sometimes, loved most of the Robert
              Langton series, now am getting a love for finance. I developer by
              profession, mostly work on web development, and got an interest
              around blockchain, looking further with deFi, dApps, NFT. I guess
              thats it, not of a big deal, always wanted though, may be next
              time too lazy this time, still trying to win over it though.
              <span className={styles.emoji}>☺</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
