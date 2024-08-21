import React from "react";
import styles from "./Prefooter.module.scss";
import pic from "../../assets/images/prefooter_img.png";
import { useTranslation } from "react-i18next";

const Prefooter = ({ onRegisterClick }) => {
  const { t } = useTranslation("prefooter");

  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <div className={styles.group}>
          <h1 className={styles.title}>
            {t('title')} <span style={{ color: "#f8ff13" }}>{t('title_hg')}</span>
          </h1>
          <div className={styles.desc_group}>
            <p className={styles.desc}>
              {t('desc1')}{" "}
              <span style={{ color: "#f8ff13", fontWeight: 500 }}>
               {t('desc1_hg')} 
              </span>{" "}
              {t('desc1_end')}
            </p>
            <p className={styles.desc}>
              {t('desc2')}{" "}
              <span style={{ color: "#f8ff13", fontWeight: 500 }}>
                {t('desc2_hg')}
              </span>{" "}
              {t('na')}{" "}
              <span style={{ color: "#f8ff13", fontWeight: 500 }}>{t('desc1_end_hg')}</span>
            </p>
          </div>
          <button className={styles.btn} onClick={onRegisterClick}>Старт</button>
        </div>
        <img src={pic} className={styles.group_img} alt="Prefooter" />
      </div>
    </div>
  );
};

export default Prefooter;
