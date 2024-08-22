import React from "react";
import styles from "../PromoGroup/PromoGroup.module.scss";
import box from "../../assets/images/box_1.png";
import box_mob from "../../assets/images/box_1_mob.png";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const PromoGroup = () => {
  const { t } = useTranslation("promogroup");
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h1 className={styles.title}>
            {t("title")}{" "}
            <span style={{ color: "#f8ff13" }}>{t("title_hg")}</span>
          </h1>
          <div className={styles.group}>
            <div className={styles.group_1}>
              <div className={styles.pic1}>
                <div className={styles.text}>
                  <p className={styles.name}>{t("pic1_name")}</p>
                  <div className={styles.desc}>{t("pic_prize")}</div>
                </div>
              </div>
              <div className={styles.pic2}>
                <div className={styles.text}>
                  <p className={styles.name}>{t("pic2_name")}</p>
                  <div className={styles.desc}>{t("pic_prize")}</div>
                </div>
              </div>
              <div className={styles.pic3}>
                <div className={styles.text}>
                  <p className={styles.name}>{t("pic3_name")}</p>
                  <div className={styles.desc}>{t("pic_prize")}</div>
                </div>
              </div>
              <div className={styles.pic4}>
                <div className={styles.text}>
                  <p className={styles.name}>{t("pic4_name")}</p>
                  <div className={styles.desc}>{t("pic_prize")}</div>
                </div>
              </div>
            </div>
            <div className={styles.group_2}>
              <img src={box} className={styles.group_2_img} />
              <img src={box_mob} className={styles.group_2_img_mob} />
              <div className={styles.desc_group}>
                <h1 className={styles.desc_title}>
                  {t("desc_title")}{" "}
                  <span style={{ color: "#f8ff13" }}>{t("desc_title_hg")}</span>
                </h1>
                <NavLink to="/shop">
                <button className={styles.btn}>{t("shop")}</button>
              </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoGroup;
