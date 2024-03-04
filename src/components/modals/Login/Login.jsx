import styles from './Login.module.scss'
import steam from '../../../assets/images/icons/steam.svg'
import { useState } from 'react'
import eye from '../../../assets/images/icons/eye.svg'
import eyeClose from '../../../assets/images/icons/eye-close.svg'
import list from '../../../assets/images/icons/list.svg'
import Button from '../../Button/Button'

const Login = ({ onRegisterClick,
                 onHelpClick }) => {
  const [isIdValid, setIdIsValid] = useState(true)
  const [id, setId] = useState('')

  const onIdChange = (value) => {
    setId(value)

    setIdIsValid(value.length)
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const [password, setPassword] = useState('')
  const [isPasswordHasNum, setPasswordHasNum] = useState(true)
  const [isPasswordMin, setPasswordMin] = useState(true)

  const onPasswordChange = (value) => {
    setPassword(value)

    setPasswordHasNum(/\d/.test(value))
    setPasswordMin(/^.{6,}$/.test(value))
  }

  const login = async (login, password) => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login, password })
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful', data);
      } else {
        console.error('Login failed', response.status);
      }
    } catch (error) {
      console.error('Error during login', error);
    }
  }

  const auth = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful', data);
      } else {
        console.error('Login failed', response.status);
      }
    } catch (error) {
      console.error('Error during login', error);
    }
  }

  const Enter = () => {
    if (!password.length || !id.length || !isPasswordHasNum || !isPasswordMin) {
      return
    }

    login(id, password)
    auth()
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        Войти
      </div>

      <div className={styles.steam}>
        <img src={steam} alt="" />
      </div>

      <div className={styles.subtitle}>
        <div className={styles.line}>

        </div>
        <div>
          Или войти через Parimatch
        </div>
        <div className={styles.line}>

        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label}>
          Parimatch ID<span>*</span>
        </div>
        <div className={`${styles.input} ${isIdValid ? '' : styles.error}`}>
          <div className={styles.inputWrapper}>
            <input type="text"
              onChange={(e) => onIdChange(e.target.value)}
              placeholder='Parimatch ID' />
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label}>
          Пароль<span>*</span>
        </div>
        <div className={`${styles.input} ${isPasswordHasNum && isPasswordMin ? '' : styles.error}`}>
          <div className={styles.inputWrapper}>
            <input type={isPasswordVisible ? 'text' : 'password'}
              placeholder='Пароль'
              onChange={(e) => onPasswordChange(e.target.value)} />
          </div>
          <div className={styles.eye}
            onClick={togglePasswordVisibility}>
            <img src={isPasswordVisible ? eyeClose : eye} alt="" />
          </div>
        </div>

        <div className={styles.condition}>
          <div className={`${styles.conditionItem} ${isPasswordMin ? '' : styles.errorTxt}`}>
            <img src={list} alt="" />
            Минимум 6 символов
          </div>
          <div className={`${styles.conditionItem} ${isPasswordHasNum ? '' : styles.errorTxt}`}>
            <img src={list} alt="" />
            Минимум 1 цифра (0-9)
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.btn}
             onClick={Enter}>
          <Button title='Войти' />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.enter}>
          Нет аккаунта? <span onClick={onRegisterClick}>Зарегистрироваться</span>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.help}
             onClick={onHelpClick}>
          Помощь при входе
        </div>
      </div>

    </div>
  )
}

export default Login