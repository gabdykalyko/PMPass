import styles from './Login.module.scss'
import { useRef, useState } from 'react'
import Button from '../../Button/Button'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../../../slices/authSlice'
import { useNavigate } from 'react-router-dom'
import { IMaskInput } from 'react-imask'
import { useTranslation } from 'react-i18next'

const Login = ({ onRegisterClick, onHelpClick, closeForm, onOfferRulesClick }) => {
  const { t } = useTranslation(['main', 'errors', 'reg'])

  const [isIdValid, setIdIsValid] = useState(true)
  const [id, setId] = useState('')
  const [showError, setShowError] = useState(false)
  const [errorText, setErrorText] = useState('')

  const [isUserPhoneEntered, setIsUserPhoneEntered] = useState(false)
  const [isUserEmailEntered, setIsUserEmailEntered] = useState(false)
  const [isUserAccountEntered, setIsUserAccountEntered] = useState(false)
  const [isUserPasswordEntered, setIsUserPasswordEntered] = useState(false)

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
        setErrorText(t('errors:no_account'))
      } else {
        setErrorText(t('errors:error_data'))
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
        {t('to_enter')}
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
          {t('account')}
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
          <div className={`${styles.input} ${isIdValid ? '' : styles.error}
                           ${isUserPhoneEntered ? styles.inputFocus : ''}`}>
            <div className={styles.inputWrapper}>
              <IMaskInput mask='+{7}(000) 000 - 00 - 00'
                lazy={false}
                unmask={true}
                ref={ref}
                inputRef={inputRef}
                onAccept={onPhoneChange}
                onFocus={() => setIsUserPhoneEntered(true)}
                onBlur={() => setIsUserPhoneEntered(false)}
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
          <div className={`${styles.input} ${isIdValid ? '' : styles.error}
                           ${isUserAccountEntered ? styles.inputFocus : ''}`}>
            <div className={styles.inputWrapper}>
              <input type="text"
                onChange={(e) => onIdChange(e.target.value)}
                placeholder='Parimatch ID'
                onFocus={() => setIsUserAccountEntered(true)}
                onBlur={() => setIsUserAccountEntered(false)} />
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
          <div className={`${styles.input} ${isIdValid ? '' : styles.error}
                           ${isUserEmailEntered ? styles.inputFocus : ''}`}>
            <div className={styles.inputWrapper}>
              <input type="text"
                onChange={(e) => onIdChange(e.target.value)}
                onFocus={() => setIsUserEmailEntered(true)}
                onBlur={() => setIsUserEmailEntered(false)}
                placeholder='Email' />
            </div>
          </div>
        </div>
      }

      <div className={styles.row}>
        <div className={styles.label}>
          {t('password')}<span>*</span>
        </div>
        <div className={`${styles.input} ${isPasswordValid ? '' : styles.error}
                         ${isUserPasswordEntered ? styles.inputFocus : ''}`}>
          <div className={styles.inputWrapper}>
            <input type={isPasswordVisible ? 'text' : 'password'}
              placeholder={t('password')}
              onChange={(e) => onPasswordChange(e.target.value)}
              onFocus={() => setIsUserPasswordEntered(true)}
              onBlur={() => setIsUserPasswordEntered(false)} />
          </div>
          <div className={styles.eye}
            onClick={togglePasswordVisibility}>
            {isPasswordVisible ?
              <svg fill="#E0E0E0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path class="eye" d="M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z" />
              </svg> :
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="#E0E0E0" d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" />
              </svg>}
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.btn}
          onClick={Enter}>
          <Button title={t('to_enter')} />
        </div>
      </div>

      <div className={styles.regOffer}>
        {t('reg_first')}
      </div>
      <div onClick={onOfferRulesClick} className={styles.regOfferBtn}>
        {t('reg_second')}
      </div>

      <div className={styles.row}>
        <div className={styles.enter}>
        {t('reg:no_account')} <span onClick={onRegisterClick}>{t('to_register')}</span>
        </div>
      </div>

      <div className={`${styles.row} ${styles.rowLast}`}>
        <div className={styles.help}
          onClick={onHelpClick}>
          {t('enter_help')}
        </div>
      </div>

    </div>
  )
}

export default Login