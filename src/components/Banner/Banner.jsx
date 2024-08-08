import styles from "./Banner.module.scss";
import steam from "../../assets/images/social/steam.svg";
import dota from "../../assets/images/social/dota.svg";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import banner from "../../assets/images/banner.png";
import bannerMob from "../../assets/images/banner-mob.png";
import { useTranslation } from "react-i18next";

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
            <p className={styles.subtitle}>Играйте с Parimatch</p>
            <h1 className={styles.title}>
              Выполняйте <span style={{ color: "#FFEB31" }}>квесты</span>
            </h1>
            <h1 className={styles.title}>
              Зарабатывайте <span style={{ color: "#AE6FFF" }}>баллы</span>
            </h1>
            <h1 className={styles.title}>
              Обменивайте на <span style={{ color: "#FFEB31" }}>Freebet</span> и
              скины
            </h1>
            <button className={styles.btn}>Начать</button>
          </div>
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
