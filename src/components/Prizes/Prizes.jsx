import Button from '../Button/Button'
import styles from './Prizes.module.scss'
import defaultImg from '../../assets/images/default-img.jpg'
import prizes from '../../assets/images/prizes.png'
import { useTranslation } from 'react-i18next'

const Prizes = () => {
  const { t } = useTranslation(['prizes', 'main'])

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} container-main`}>

        <div className={styles.info}>
          <div>
            <div className={styles.title}>
              {t('title')}
            </div>
            <div className={styles.txt}>
              {t('text1')}
            </div>
            <div className={styles.txt}>
              {t('text2')}
            </div>
            <div className={styles.btn}>
              <Button title={t('main:begin')} />
            </div>
          </div>
        </div>

        <div className={styles.img}>
          <img src={prizes} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Prizes