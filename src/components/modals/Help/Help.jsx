import styles from './Help.module.scss'
import whatsapp from '../../../assets/images/social/whatsapp.svg'
import telegram from '../../../assets/images/social/telegram.svg'
import phone from '../../../assets/images/social/phone.svg'
import { NavLink } from 'react-router-dom'

const Help = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        Помощь при входе
      </div>
      <div className={styles.txt}>
        Похоже, что у вас возникли проблемы со входом.
      </div>
      <div className={styles.txt}>
        Попробуйте обратиться в службу поддержки.
      </div>

      <div className={styles.social}>
        <NavLink to={'https://wa.me/+77712229992'}
                 target='_blank'>
          <img src={whatsapp} alt="" />
        </NavLink>
        <NavLink to={'https://t.me/PMKzSupport_bot'}
                 target='_blank'>
          <img src={telegram} alt="" />
        </NavLink>
        <NavLink to={'tel:9933'}>
          <img src={phone} alt="" />
        </NavLink>
      </div>
    </div>
  )
}

export default Help