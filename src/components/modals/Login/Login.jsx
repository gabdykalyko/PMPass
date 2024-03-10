import styles from './Login.module.scss'
import steam from '../../../assets/images/icons/steam.svg'
import steamMob from '../../../assets/images/icons/steam-mob.svg'
import { useEffect, useState } from 'react'
import eye from '../../../assets/images/icons/eye.svg'
import eyeClose from '../../../assets/images/icons/eye-close.svg'
import Button from '../../Button/Button'
import axios from 'axios'
import useAuth from '../../../hoc/useAuth'

const Login = ({ onRegisterClick, onHelpClick }) => {

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
  const [isPasswordValid, setPasswordValid] = useState(true)

  const onPasswordChange = (value) => {
    setPassword(value)

    setPasswordValid(value.length)
  }

  const [isMobile, setIsMobile] = useState(window.innerWidth < 850)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 850);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  const [authData, setAuthData, fetchData] = useAuth()

  const login = async (login, password) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_GR8_URL}/login`, {
        'login': login,
        'password': password
      },
        {
          headers: {
            'X-API-KEY': process.env.REACT_APP_API_KEY,
            'Content-Type': 'application/json'
          }
        })
      if (response.data) {
        try {
          const response = await axios.post(`${process.env.REACT_APP_API_URL}/login_by_site`, {
            pm_id: login
          }, {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          });

          fetchData()
        } catch (error) {
          console.error(error);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  const Enter = () => {
    if (!password.length || !id.length) {
      return
    }

    login(id, password)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        Войти
      </div>

      <div className={styles.steam}>
        {isMobile ? (
          <img src={steamMob} alt="" />
        ) : (
          <img src={steam} alt="" />
        )}
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
        <div className={`${styles.input} ${isPasswordValid ? '' : styles.error}`}>
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