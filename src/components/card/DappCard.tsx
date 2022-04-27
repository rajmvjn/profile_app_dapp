import styles from "./dappcard.module.scss";

import DAPP from "../../models/dapp";

const DappCard: React.FC<{ dapps: DAPP[] }> = (props) => {
  return (
    <>
      {props.dapps.map((dapp, index) => (
        <div className={styles.main_dapps_item} key={dapp._id}>
          <div className={styles.card}>
            <div
              className={
                styles.card__picture + " " + styles[`card__picture_${index}`]
              }
            >
              &nbsp;
            </div>
            <h4 className={styles.card__heading}>
              <span className={styles.card__heading_span_1}>{dapp.name}</span>
            </h4>
            <div className={styles.card__details}>
              <ul>
                {dapp.description.map((description, i) => (
                  <li key={i}>{description}</li>
                ))}
              </ul>
              <div className={styles.card__link}>
                <button className={styles.card__link_button}>
                  View more &#8594;{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DappCard;
