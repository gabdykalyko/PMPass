import styles from './Login.module.scss'
import steam from '../../../assets/images/icons/steam.svg'
import steamMob from '../../../assets/images/icons/steam-mob.svg'
import { useEffect, useRef, useState } from 'react'
import eye from '../../../assets/images/icons/eye.svg'
import eyeClose from '../../../assets/images/icons/eye-close.svg'
import Button from '../../Button/Button'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../../../slices/authSlice'
import { useNavigate } from 'react-router-dom'
import { IMaskInput } from 'react-imask'

const Login = ({ onRegisterClick, onHelpClick, closeForm }) => {

  const [isIdValid, setIdIsValid] = useState(true)
  const [id, setId] = useState('')
  const [showError, setShowError] = useState(false)
  const [errorText, setErrorText] = useState('')

  const [enter, setEnter] = useState('phone')

  const onIdChange = (value) => {
    setId(value)

    setIdIsValid(value.length)
  }

  const onPhoneChange = (value) => {
    setId(value)
    setIdIsValid(value.length === 11)
  }

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

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const login = async (login, password) => {
    try {
      const responseGR8 = await axios.post(`${process.env.REACT_APP_GR8_URL}/login`, {
        'login': login,
        'password': password
      },
        {
          headers: {
            'X-API-KEY': process.env.REACT_APP_API_KEY,
            'Content-Type': 'application/json'
          }
        })
      if (responseGR8.data) {
        try {
          const response = await axios.post(`${process.env.REACT_APP_API_URL}/login_by_site`, {
            pm_id: responseGR8.data.accountInfo.number,
            phone: responseGR8.data.accountInfo.phone
          }, {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          })

          if (response.data.status === 'success') {
            dispatch(loginSuccess({
              isAuthenticated: true,
              user: response.data.userInfo
            }))

            if (response.data.userInfo.first_login) {
              navigate('/welcome')
            }

            closeForm()
          }

        } catch (error) {
          console.error(error);
        }
      }
    } catch (error) {
      if (error.response) {
        setPasswordValid(false)
        setIdIsValid(false)
        setShowError(true)
        setErrorText('Похоже, данные введены некорректно или у вас еще нет аккаунта')
      } else {
        setErrorText('Ошибка в обработке данных')
        setShowError(true)
      }
    }
  }

  const Enter = () => {
    if (!password.length || !id.length) {
      return
    }

    login(id, password)
  }

  const handleSelect = (enter) => {
    setEnter(enter)
    setIdIsValid(true)
  }

  const ref = useRef(null);
  const inputRef = useRef(null);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        Войти
      </div>

      {showError ? <div className={styles.errorMessage}>
        {errorText}
      </div> : ''}

      <div className={styles.select}>
        <div className={`${styles.selectItem} ${enter === 'phone' && styles.selected}`}
          onClick={() => handleSelect('phone')}>
          Телефон
        </div>
        <div className={`${styles.selectItem} ${enter === 'account' && styles.selected}`}
          onClick={() => handleSelect('account')}>
          Номер счета
        </div>
        <div className={`${styles.selectItem} ${enter === 'email' && styles.selected}`}
          onClick={() => handleSelect('email')}>
          E-mail
        </div>
      </div>

      {
        enter === 'phone' &&
        <div className={`${styles.row} ${styles.firstRow}`}>
          <div className={styles.label}>
            Телефон<span>*</span>
          </div>
          <div className={`${styles.input} ${isIdValid ? '' : styles.error}`}>
            <div className={styles.inputWrapper}>
              <IMaskInput mask='+{7}(000) 000 - 00 - 00'
                lazy={false}
                unmask={true}
                ref={ref}
                inputRef={inputRef}
                onAccept={onPhoneChange}
                placeholderChar="X" />
            </div>
          </div>
        </div>
      }

      {
        enter === 'account' &&
        <div className={`${styles.row} ${styles.firstRow}`}>
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
      }

      {
        enter === 'email' &&
        <div className={`${styles.row} ${styles.firstRow}`}>
          <div className={styles.label}>
            Email<span>*</span>
          </div>
          <div className={`${styles.input} ${isIdValid ? '' : styles.error}`}>
            <div className={styles.inputWrapper}>
              <input type="text"
                onChange={(e) => onIdChange(e.target.value)}
                placeholder='Email' />
            </div>
          </div>
        </div>
      }

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

      <div className={`${styles.row} ${styles.rowLast}`}>
        <div className={styles.help}
          onClick={onHelpClick}>
          Помощь при входе
        </div>
      </div>

    </div>
  )
}

export default Login