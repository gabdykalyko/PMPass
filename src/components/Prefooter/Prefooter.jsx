import React from "react";
import styles from ".//Prefooter.module.scss";
import pic from "../../assets/images/prefooter_img.png";

const Prefooter = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <div className={styles.group}>
          <h1 className={styles.title}>
            Стартовый <span style={{ color: "#f8ff13" }}>буст</span>
          </h1>
          <div className={styles.desc_group}>
            <p className={styles.desc}>
              Получите{" "}
              <span style={{ color: "#f8ff13", fontWeight: 500 }}>
                300 PM баллов
              </span>{" "}
              на старте!
            </p>
            <p className={styles.desc}>
              Обменивайте{" "}
              <span style={{ color: "#f8ff13", fontWeight: 500 }}>
                стартовый буст
              </span>{" "}
              на{" "}
              <span style={{ color: "#f8ff13", fontWeight: 500 }}>лутбокс</span>
            </p>
          </div>
          <button className={styles.btn}>Старт</button>
        </div>
        <img src={pic} className={styles.group_img} />
      </div>
    </div>
  );
};

export default Prefooter;
