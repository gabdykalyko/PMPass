import React from "react";
import styles from "./Promo.module.scss";
import banner from "../../assets/images/banner.png";
import banner_mob from "../../assets/images/banner-mob.png";

const Promo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h1 className={styles.title}>
            Зарабатывайте баллы c{" "}
            <span style={{ color: "#ffff" }}>parimatch</span>
          </h1>
          <div className={styles.group}>
            <div className={styles.desc}>
              <h1 className={styles.title}>Выполняйте квесты</h1>
              <div className={styles.subtitles}>
                <p className={styles.subtitle}>Пополните счет</p>
                <p className={styles.subtitle}>Пройдите верификацию</p>
                <p className={styles.subtitle}>Соберите экспресс</p>
              </div>
              <button className={styles.button}>Квесты</button>
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
