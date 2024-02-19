import styles from './Header.module.scss'
import logo from '../../assets/images/logo.svg'
import { Link, NavLink } from 'react-router-dom'
import Button from '../Button/Button'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div>
          <img src={logo} alt="" />
        </div>

        <div className={styles.nav}>
          <div>
            <NavLink to="/">
              Главная
            </NavLink>
          </div>
          <div>
            <NavLink to="/shop">
              Магазин
            </NavLink>
          </div>
          <div>
            <NavLink to="/quests">
              Квесты
            </NavLink>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div>
          <Button title="Вход" color="brown"/>
        </div>
        <div>
          <Button title="Регистрация"/>
        </div>
      </div>
    </div>
  )
}

export default Header;