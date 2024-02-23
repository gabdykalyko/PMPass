import styles from './HeaderMob.module.scss'
import logo from '../../assets/images/logo-mob.svg'
import burger from '../../assets/images/burger-menu.svg'
import Button from '../Button/Button'

const HeaderMob = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={logo} alt="" />
      </div>

      <div className={styles.right}>
        <div>
          <Button title="Регистрация" />
        </div>
        <div>
          <img src={burger} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HeaderMob