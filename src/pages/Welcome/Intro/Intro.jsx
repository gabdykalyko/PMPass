import { NavLink } from 'react-router-dom'
import styles from './Intro.module.scss'
import arrow from '../../../assets/images/icons/arrow-right.svg'
import first from '../../../assets/images/welcome/first-mob.png'
import { useTranslation } from 'react-i18next'

const Intro = ({ onClickNext }) => {
  const { t } = useTranslation(['welcome', 'main'])

  return (
    <div className={`${styles.container} container-main`}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <span className={styles.yellow}>PM-Pass</span> {t('intro_title')}
        </div>
        <div className={styles.info}>
          <div>
            Это официальный продукт компании Париматч.
          </div>
          <div className={styles.txt} dangerouslySetInnerHTML={{ __html: t('intro_text2') }}>
          </div>
        </div>
        <div onClick={onClickNext}
          className={styles.btn}>
          <button>
            {t('main:next')}
            <img src={arrow} alt="" />
          </button>
        </div>
        <div className={styles.banner}>
          <img src={first} alt="" />
        </div>
      </div>
      <div className={styles.backgroundImg}>

      </div>
    </div>
  )
}

export default Intro