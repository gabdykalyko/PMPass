import Button from "../../../components/Button/Button";
import WelcomeHeader from "../WelcomeHeader/WelcomeHeader";
import styles from "../QuestGuide/QuestGuide.module.scss";
import arrow from "../../../assets/images/icons/arrow-right.svg";
import arrowYellow from "../../../assets/images/icons/arrow-yellow.svg";
import second from "../../../assets/images/welcome/second.png";
import { useTranslation } from "react-i18next";
import back_arrow from "../../../assets/images/back_arrow.png";
import pic_one from "../../../assets/images/quest_guide_one.png";
import pic_two from "../../../assets/images/quest_guide_two.png";

const QuestGuide = ({ onClickPrevious, onClickNext }) => {
  const { t } = useTranslation(["main", "welcome"]);

  return (
    <div className={`${styles.container} container-main`}>
      <WelcomeHeader />
      <div className={styles.wrapper}>
        <div onClick={onClickPrevious} className={styles.back}>
          <img src={back_arrow} alt="" />
        </div>
        <div className={styles.title}>
          {t("welcome:quest_guide")}{" "}
          <span className={styles.yellow}>{t("welcome:quest_guide_hg")}</span>
        </div>
        <div className={styles.info}>
          <div className={styles.group_one}>
            <img src={pic_one} alt="Quest Guide One" />
            <div className={styles.obj_one}>
              <h1 className={styles.title}>{t("welcome:obj_one_title")}</h1>
              <p className={styles.desc}>{t("welcome:obj_one_desc")}</p>
            </div>
          </div>
          <div className={styles.group_two}>
            <img src={pic_two} alt="Quest Guide Two" />
            <div className={styles.obj_two}>
              <h1 className={styles.title}>{t("welcome:obj_two_title")}</h1>
              <p className={styles.desc}>{t("welcome:obj_two_desc")}</p>
            </div>
          </div>
        </div>
        <div onClick={onClickNext} className={styles.btn}>
          <button>
            {t("next")}
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestGuide;
