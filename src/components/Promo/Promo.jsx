import React from "react";
import styles from "./Promo.module.scss";
import banner from "../../assets/images/banner.png";
import banner_mob from "../../assets/images/banner-mob.png";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Promo = () => {
  const { t } = useTranslation("promo");
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h1 className={styles.title}>
            {t('title1')}{" "}
            <span style={{ color: "#ffff" }}>{t('title1_hg')}</span>
          </h1>
          <div className={styles.group}>
            <div className={styles.desc}>
              <h1 className={styles.title}>{t('title2')}</h1>
              <div className={styles.subtitles}>
                <p className={styles.subtitle}>{t('patch1')}</p>
                <p className={styles.subtitle}>{t('patch2')}</p>
                <p className={styles.subtitle}>{t('patch3')}</p>
              </div>
              
              <NavLink to="/quests">
                <button className={styles.button}>{t('quests')}</button>
              </NavLink>
            </div>

            <img src={banner} className={styles.img} />
            <img src={banner_mob} className={styles.img_mob} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;

