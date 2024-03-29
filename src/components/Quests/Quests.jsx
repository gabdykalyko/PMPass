import Button from '../Button/Button'
import styles from './Quests.module.scss'
import defaultImg from '../../assets/images/default-img.jpg'
import quests from '../../assets/images/quests.png'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

const Quests = () => {
  const { t } = useTranslation(['quests', 'main'])

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} container-main`}>
        <div className={styles.img}>
          <img src={quests} alt="" />
        </div>
        <div className={styles.info}>
          <div>
            <div className={styles.title}>
              {t('main:quests')}
            </div>
            <div className={styles.txt}>
              {t('text1')}
            </div>
            <div className={styles.txt}>
              {t('text2')}
            </div>
            <div>
              <NavLink to='/quests'>
                <Button title="Начать" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quests