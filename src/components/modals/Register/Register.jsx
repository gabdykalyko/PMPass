import styles from './Register.module.scss'
import eye from '../../../assets/images/icons/eye.svg'
import eyeClose from '../../../assets/images/icons/eye-close.svg'
import list from '../../../assets/images/icons/list.svg'
import checkbox from '../../../assets/images/icons/checkbox.svg'
import checked from '../../../assets/images/icons/checked.svg'
import { useState } from 'react'
import Button from '../../Button/Button'
import { useRef } from 'react'
import { IMaskInput } from 'react-imask'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../../../slices/authSlice'

const Register = ({ onLoginClick, closeForm, onOfferClick, onBonusClick }) => {
  const [isOfferChecked, setIsOfferChecked] = useState(false)
  const [isBonusChecked, setIsBonusChecked] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [showError, setShowError] = useState(false)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const [isOfferValid, setOfferValid] = useState(true)

  const handleOfferChange = () => {
    setIsOfferChecked(!isOfferChecked)

    setOfferValid(!isOfferChecked)
  }

  const getOfferSrc = () => {
    return isOfferChecked ? checked : checkbox;
  }

  const handleBonusChange = () => {
    setIsBonusChecked(!isBonusChecked);
  }

  const getBonusrSrc = () => {
    return isBonusChecked ? checked : checkbox;
  }

  const ref = useRef(null);
  const inputRef = useRef(null);

  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')

  const [isPhoneValid, setPhoneIsValid] = useState(true)

  const onPhoneChange = (value) => {
    setPhoneNumber(value)
    setPhoneIsValid(value.length === 11)
  };

  const [isPasswordHasNum, setPasswordHasNum] = useState(true)
  const [isPasswordMin, setPasswordMin] = useState(true)

  const onPasswordChange = (value) => {
    setPassword(value)

    setPasswordHasNum(/\d/.test(value))
    setPasswordMin(/^.{6,}$/.test(value))
  };

  const Enter = () => {
    if (!password.length || !phoneNumber.length || !isPasswordHasNum || !isPasswordMin || !isOfferChecked) {
      if (!isPasswordHasNum) {
        setPasswordHasNum(false)
      }
      if (!isPasswordMin) {
        setPasswordMin(false)
      }
      if (!password.length) {
        setPasswordMin(false)
        setPasswordHasNum(false)
      }
      if (!phoneNumber.length) {
        setPhoneIsValid(false)
      }
      if (!isOfferChecked) {
        setOfferValid(false)
      }
      return
    }

    register(phoneNumber, password, isOfferChecked)
  }

  const dispatch = useDispatch()

  const register = async (login, password, isOfferChecked) => {
    try {
      const response1 = await axios.post(`${process.env.REACT_APP_GR8_URL}/registration/byform`, {
        'formName': 'LANDING_REGISTRATION',
        'phone': login,
        'password': password,
        'defaultCurrency': 'KZT',
        'selectedLanguage': 'ru',
        'isPlayerAgree': isOfferChecked,
        'nnBonus': isBonusChecked ? '2' : '0'
      },
        {
          headers: {
            'X-API-KEY': process.env.REACT_APP_API_KEY,
            'Content-Type': 'application/json'
          }
        })

      if (response1.data) {
        try {
          const response2 = await axios.post(`${process.env.REACT_APP_API_URL}/login_by_site`, {
            pm_id: response1.data.accountInfo.number
          }, {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          })

          if (response2.data.status === 'success') {
            dispatch(loginSuccess({
              isAuthenticated: true,
              user: response2.data.userInfo
            }))
            closeForm()
          }

        } catch (error) {
          console.error(error);
        }
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data.fieldErrors) {
          if (error.response.data.fieldErrors.phone[0].type === 'AllowedChars') {
            setErrorText('Номер телефона не поддерживается')
            setPhoneIsValid(false)
            setShowError(true)
          }
        } else if (error.response.data.modelErrors) {
          if (error.response.data.modelErrors[0].type === 'PhoneCurrencyUnique') {
            setErrorText('Номер телефона уже зарегистрирован')
            setPhoneIsValid(false)
            setShowError(true)
          }
        }
      } else {
        setErrorText('Ошибка в обработке данных')
        setShowError(true)
      }
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        Регистрация
      </div>
      {showError ? <div className={styles.errorMessage}>
        { errorText }
      </div> : ''}
      <div className={`${styles.row} ${styles.firstRow}`}>
        <div className={styles.label}>
          Номер телефона<span>*</span>
        </div>
        <div className={`${styles.input} ${isPhoneValid ? '' : styles.error}`}>
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
        <div className={`${styles.offer} ${isOfferValid ? '' : styles.error}`}>
          <div>
            Мне больше 21 года <span onClick={onOfferClick}>Я соглашаюсь с договором оферты</span>
          </div>
          <label>
            <input type="checkbox"
              checked={isOfferChecked}
              onChange={handleOfferChange} />
            <img src={getOfferSrc()} alt="" />
          </label>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.offer}>
          <div>
            Активировать бонус на первый депозит <span onClick={onBonusClick}>Условия бонусного предложения</span>
          </div>
          <label>
            <input type="checkbox"
              checked={isBonusChecked}
              onChange={handleBonusChange} />
            <img src={getBonusrSrc()} alt="" />
          </label>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.btn}
          onClick={Enter}>
          <Button title='Регистрация' />
        </div>
      </div>

      <div className={`${styles.row} ${styles.rowLast}`}>
        <div className={styles.enter}>
          Есть аккаунт? <span onClick={onLoginClick}>Войти</span>
        </div>
      </div>

    </div>
  )
}

export default Register