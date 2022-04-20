import styles from "./dashboard.module.scss";
import myPic from "../../assets/images/me.jpg";
import DappCard from "../../components/card/DappCard";
import ConnectForm from "../../components/connect_form/ConnectForm";
import DAPP from "../../models/dapp";

const dappList: DAPP[] = [
  {
    _id: "1",
    name: "The Auction Contract",
    description: [
      "Auction Contract",
      "3 day tours",
      "Up to 30 people",
      "2 tour guides",
    ],
  },
  {
    _id: "2",
    name: "Make your crowd funding",
    description: [
      "Auction Contract",
      "3 day tours",
      "Up to 30 people",
      "2 tour guides",
    ],
  },
  {
    _id: "3",
    name: "Make your own ICO",
    description: [
      "Auction Contract",
      "3 day tours",
      "Up to 30 people",
      "2 tour guides",
    ],
  },
];

const Dashboard: React.FC = () => {
  return (
    <main className={styles.main}>
      <section className={styles.main_dapps}>
        <h2 className={styles.main_h2_title}>explore decentralized apps</h2>
        <div className={styles.main_dapps_container}>
          <DappCard dapps={dappList} />
        </div>
      </section>
      <section className={styles.main_connect}>
        <h2 className={styles.main_h2_title}>connect</h2>
        <ConnectForm />
      </section>
      <section className={styles.main_about}>
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
              I Rajesh, a son, a husband, a father, a friend and a developer
            </h3>
            <p className={styles.main_about_content_text_pgh}>
              I love haning with family, i love sit back and just look at
              things, i love travel i love reading sometimes, i loved most of
              the rober langton series, now am getting a love for finance. I
              developer by profession, mostly work on web development, and got
              an ineterst for blockchain. looking further with deFi, dApps, NFT.
              I guess thats it, not of a big deal, always wanted though, may be
              next time too lazy this time, still trying to win over it though
              <span className={styles.emoji}>☺</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
