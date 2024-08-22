import Button from '../../../components/Button/Button';
import WelcomeHeader from '../WelcomeHeader/WelcomeHeader';
import styles from './ShopQuests.module.scss';
import arrow from '../../../assets/images/icons/arrow-right.svg';
import arrowYellow from '../../../assets/images/icons/arrow-yellow.svg';
import second from '../../../assets/images/welcome/second.png';
import { useTranslation } from 'react-i18next';
import back_arrow from '../../../assets/images/back_arrow.png';
import pic from '../../../assets/images/shop_quest_pic.png';

const ShopQuests = ({ onClickPrevious, onClickNext }) => {
  const { t } = useTranslation(['main', 'welcome']);

  return (
    <div className={`${styles.container} container-main`}>
      <WelcomeHeader />

      <div className={styles.wrapper}>
        <div>
          <div onClick={onClickPrevious} className={styles.back}>
            <img src={back_arrow} alt="" />
          </div>
          <div className={styles.title}>
            {t('welcome:shop_and_quests_shop')}{' '}
            <span className={styles.yellow}>{t('welcome:shop_and_quests_quests')}</span>
          </div>
          <div className={styles.info}>
            <div>{t('welcome:shop_and_quests_text1')}</div>
            <div className={styles.txt}>{t('welcome:shop_and_quests_text2')}</div>
            <div className={styles.txt}>{t('welcome:shop_and_quests_text3')}</div>
          </div>
          <div onClick={onClickNext} className={styles.btn}>
            <button>
              {t('next')}
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>

        <img src={pic} className={styles.pic} alt="Shop Quest" />
      </div>
    </div>
  );
};

export default ShopQuests;
