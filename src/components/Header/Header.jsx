import styles from './Header.module.scss'
import logo from '../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'

const Header = ({ onLoginClick, onRegisterClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div>
          <NavLink to="/">
            <img src={logo} alt="Parimatch" />
          </NavLink>
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
        <div onClick={onLoginClick}>
          <Button title="Вход"
                  color="brown"/>
        </div>
        <div onClick={onRegisterClick}>
          <Button title="Регистрация"/>
        </div>
      </div>
    </div>
  )
}

export default Header;