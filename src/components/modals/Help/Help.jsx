import styles from './Help.module.scss'
import telegram from '../../../assets/images/social/telegram.svg'
import phone from '../../../assets/images/social/phone.svg'
import back from '../../../assets/images/icons/arrow-back.svg'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Help = ({ onLoginClick }) => {
  const { t } = useTranslation(['main', 'help'])

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {t('enter_help')}
      </div>
      <div className={styles.txt}>
        {t('help:have_trouble')}
      </div>
      <div className={styles.txt}>
        {t('help:ask_help')}
      </div>

      <div className={styles.social}>
        <NavLink to={'https://t.me/PMKzSupport_bot'}
          target='_blank'>
          <img src={telegram} alt="" />
        </NavLink>
        <NavLink to={'tel:9933'}>
          <img src={phone} alt="" />
        </NavLink>
      </div>
      <div className={styles.back}
        onClick={onLoginClick}>
        <img src={back} alt="" />
      </div>
    </div>
  )
}

export default Help