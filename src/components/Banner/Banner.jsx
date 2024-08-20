import React, { useState } from "react";
import styles from "./Banner.module.scss";
import Form from "../modals/Form/Form";
import banner_pic from '../../assets/images/new_banner_desktop.png';
import banner_pic_mob from '../../assets/images/new_banner_mob.png';
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation("banner");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.section}>
          <div className={styles.group}>
            <h1 className={styles.title}>
              {t('title1')} <span style={{ color: "#FFEB31" }}>{t('title1_hg')}</span>
            </h1>
            <h1 className={styles.title}>
              {t('title2')} <span style={{ color: "#AE6FFF" }}>{t('title2_hg')}</span>
            </h1>
            <h1 className={styles.title}>
              {t('title3')} <span style={{ color: "#FFEB31" }}>{t('title3_hg')}</span> {t('title3_suffix')}
            </h1>
            <button className={styles.btn} onClick={openForm}>
              {t('button')}
            </button>
          </div>
          <img src={banner_pic} className={styles.banner_pic} alt="Banner" />
          <img src={banner_pic_mob} className={styles.banner_pic_mob} alt="Mobile Banner" />
        </div>
      </div>

      {isFormOpen && (
        <Form 
          showLogin={false} // Сразу показываем регистрацию
          closeForm={closeForm}
          onLoginClick={() => {}}
          onRegisterClick={() => {}}
          onHelpClick={() => {}}
          showHelp={false}
          onOfferClick={() => {}}
          onBonusClick={() => {}}
          onOfferRulesClick={() => {}}
          showOfferRules={false}
        />
      )}
    </div>
  );
};

export default Banner;
