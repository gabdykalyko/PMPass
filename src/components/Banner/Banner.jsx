import styles from "./Banner.module.scss";
import steam from "../../assets/images/social/steam.svg";
import dota from "../../assets/images/social/dota.svg";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import banner from "../../assets/images/banner.png";
import bannerMob from "../../assets/images/banner-mob.png";
import { useTranslation } from "react-i18next";
import banner_pic from '../../assets/images/new_banner_desktop.png';
import banner_pic_mob from '../../assets/images/new_banner_mob.png'

const Banner = ({ onRegisterClick }) => {
  const { t } = useTranslation("banner");

  const [isMobile, setIsMobile] = useState(window.innerWidth < 850);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 850);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            <button className={styles.btn}>Начать</button>
          </div>
          <img src={banner_pic} className={styles.banner_pic}/>
          <img src={banner_pic_mob} className={styles.banner_pic_mob}/>
        </div>
      </div>
      {/* <div className={styles.info}>
      <div className={`${styles.container} container-main`}>
          <div className={styles.title}>{t("title")}</div>
          <div className={styles.subtitle}>{t("subtitle")}</div>
          <div onClick={onRegisterClick}>
            <Button title={t("btn")} />
          </div>
          <div className={styles.platforms}>
            <div>
              <img src={steam} alt="" />
            </div>
            <div>
              <img src={dota} alt="" />
            </div>
          </div>
      </div>
      </div>
      <div className={styles.banner}>
        <img src={bannerMob} alt="" />
      </div>
      <div className={styles.bannerDesk}></div> */}
    </div>
  );
};

export default Banner;
