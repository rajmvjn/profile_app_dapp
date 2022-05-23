import { useRef } from "react";

import styles from "./dashboard.module.scss";
import myPic from "../../assets/images/me.jpg";
import TwitterImg from "../../assets/images/svgs/twitter.svg";
import LinkedinImg from "../../assets/images/svgs/linkedin.svg";
import GithubImg from "../../assets/images/svgs/github.svg";
import userImg from "../../assets/images/svgs/user.svg";
import Profile from "../../assets/docs/rajesh.pdf";
import DappCard from "../../components/card/DappCard";
import ConnectForm from "../../components/connect_form/ConnectForm";
import DAPP from "../../models/dapp";
import API_ENDPOINTS from "../../constants/apiEndPoints";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

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

const Dashboard: React.FC<{}> = () => {
  const dappRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToRefHandler = (ref: any) => {
    const refItem = ref.current;
    if (refItem) {
      refItem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const openProfile = () => {
    window.open(Profile);
  };

  const gitNavHandler = () => {
    window.open(API_ENDPOINTS.GITHUB_PROFILE, "_blank");
  };

  const linkedInNavHandler = () => {
    window.open(API_ENDPOINTS.LINKEDIN_PROFILE, "_blank");
  };

  const twitterNavHandler = () => {
    window.open(API_ENDPOINTS.TWITTER_PROFILE, "_blank");
  };
  return (
    <>
      <Header
        homeRef={homeRef}
        dappRef={dappRef}
        connectRef={connectRef}
        aboutRef={aboutRef}
        onScroll={scrollToRefHandler}
      />
      <main className={styles.main}>
        <section className={styles.main_dapps} ref={dappRef}>
          <h2 className={styles.main_h2_title}>explore decentralized apps</h2>
          <div className={styles.main_dapps_container}>
            <DappCard dapps={dappList} />
          </div>
        </section>
        <section className={styles.main_connect} ref={connectRef}>
          <h2 className={styles.main_h2_title}>connect</h2>
          <ConnectForm />
          <div className={styles.social_connect}>
            <ul className={styles.social_connect_list}>
              <li className={styles.social_connect_list_item}>
                <img src={GithubImg} alt="github" onClick={gitNavHandler} />
              </li>
              <li className={styles.social_connect_list_item}>
                <img
                  src={LinkedinImg}
                  alt="linkedIn"
                  onClick={linkedInNavHandler}
                />
              </li>
              <li className={styles.social_connect_list_item}>
                <img src={userImg} alt="profile" onClick={openProfile} />
              </li>
              <li className={styles.social_connect_list_item}>
                <img
                  src={TwitterImg}
                  alt="twitter"
                  onClick={twitterNavHandler}
                />
              </li>
            </ul>
          </div>
        </section>
        <section className={styles.main_about} ref={aboutRef}>
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
                I Rajesh, a web developer with an interest in blockchain, dApp
                and DeFi.
              </h3>
              <p className={styles.main_about_content_text_pgh}>
                {/* I love hangs out with family, I love sit back and just look at
                life, I love travel, love reading sometimes, loved most of the
                Robert Langton series, now am getting a love for finance. I
                developer by profession, mostly work on web development, and got
                an interest around blockchain, looking further with deFi, dApps,
                NFT. I guess thats it, not of a big deal, always wanted though,
                may be next time too lazy this time, still trying to win over it
                though. */}
                I am a computer science graduate, with overall experience of 12
                years in the field of computer science. I mostly work on
                javascript related technologies, and got experience in React,
                Angular, HTML, CSS, Nodejs, and MongoDB. I have worked on hybrid
                mobile applications, with Ionic. In the dApp space I have worked
                on Ethereum and Corda. <br /> Outside work, I love hangs out
                with family and friends.
                <span className={styles.emoji}>☺</span>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer
        dappRef={dappRef}
        homeRef={homeRef}
        connectRef={connectRef}
        aboutRef={aboutRef}
        onScroll={scrollToRefHandler}
      />
    </>
  );
};

export default Dashboard;
