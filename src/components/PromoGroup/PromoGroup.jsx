import React from "react";
import styles from "../PromoGroup/PromoGroup.module.scss";
import box from "../../assets/images/box_1.png";
import box_mob from "../../assets/images/box_1_mob.png"

const PromoGroup = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h1 className={styles.title}>
            Обменивайте баллы <span style={{ color: "#f8ff13" }}>на призы</span>
          </h1>
          <div className={styles.group}>
            <div className={styles.group_1}>
              <div className={styles.pic1}>
                <div className={styles.text}>
                  <p className={styles.name}>Freebet на 5000 тг</p>
                  <div className={styles.desc}>846 000 PM Балов</div>
                </div>
              </div>
              <div className={styles.pic2}>
                <div className={styles.text}>
                  <p className={styles.name}>CS 2</p>
                  <div className={styles.desc}>846 000 PM Балов</div>
                </div>
              </div>
              <div className={styles.pic3}>
                <div className={styles.text}>
                  <p className={styles.name}>Dota 2</p>
                  <div className={styles.desc}>846 000 PM Балов</div>
                </div>
              </div>
              <div className={styles.pic4}>
                <div className={styles.text}>
                  <p className={styles.name}>Лутбокс</p>
                  <div className={styles.desc}>846 000 PM Балов</div>
                </div>
              </div>
            </div>
            <div className={styles.group_2}>
              <img src={box} className={styles.group_2_img} />
              <img src={box_mob} className={styles.group_2_img_mob} />
              <div className={styles.desc_group}>
                <h1 className={styles.desc_title}>
                  больше призов <span style={{ color: "#f8ff13" }}>внутри</span>
                </h1>
                <button className={styles.btn}>Магазин</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoGroup;
