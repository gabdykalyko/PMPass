import React from "react";
import styles from "./Promo.module.scss";
import banner from "../../assets/images/banner.png"

const Promo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h1 className={styles.title}><span style={{color:'#FFEB31'}}>Зарабатывайте</span><br/>баллы c parimatch</h1>
          <div className={styles.group}>
            <div className={styles.desc}>
              <h1 className={styles.title}>
              Выполняйте квесты
              </h1>
              <div className={styles.subtitles}>
                <p className={styles.subtitle}>
                Пополните счет
                </p>
                <p className={styles.subtitle}>
                Пройдите верификацию
                </p>
                <p className={styles.subtitle}>
                Соберите экспресс
                </p>
              </div>
            </div>
            <img src={banner}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
