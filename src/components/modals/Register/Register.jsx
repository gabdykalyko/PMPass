import styles from './Register.module.scss'
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
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const Register = ({ onLoginClick, closeForm, onOfferClick, onBonusClick, onOfferRulesClick }) => {
  const [isOfferChecked, setIsOfferChecked] = useState(false)
  const [isBonusChecked, setIsBonusChecked] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [showError, setShowError] = useState(false)

  const [isUserPhoneEntered, setIsUserPhoneEntered] = useState(false)
  const [isUserPasswordEntered, setIsUserPasswordEntered] = useState(false)

  const { t } = useTranslation(['main', 'reg', 'errors'])

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

  const navigate = useNavigate()

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
        'nnBonus': isBonusChecked ? '3' : '0'
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
            pm_id: response1.data.accountInfo.number,
            phone: response1.data.accountInfo.phone
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

            navigate('/welcome')
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
            setErrorText(t('errors:not_supported'))
            setPhoneIsValid(false)
            setShowError(true)
          }
        } else if (error.response.data.modelErrors) {
          if (error.response.data.modelErrors[0].type === 'PhoneCurrencyUnique') {
            setErrorText(t('errors:number_registered'))
            setPhoneIsValid(false)
            setShowError(true)
          }
        }
      } else {
        setErrorText(t('errors:error_data'))
        setShowError(true)
      }
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {t('register')}
      </div>
      {showError ? <div className={styles.errorMessage}>
        {errorText}
      </div> : ''}
      <div className={`${styles.row} ${styles.firstRow}`}>
        <div className={styles.label}>
          {t('phone')}<span>*</span>
        </div>
        <div className={`${styles.input} ${isPhoneValid ? '' : styles.error}
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

      <div className={styles.row}>
        <div className={styles.label}>
          {t('password')}<span>*</span>
        </div>
        <div className={`${styles.input} ${isPasswordHasNum && isPasswordMin ? '' : styles.error}
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

        <div className={styles.condition}>
          <div className={`${styles.conditionItem} ${isPasswordMin ? '' : styles.errorTxt}`}>
            <img src={list} alt="" />
            {t('errors:min_6_symbols')}
          </div>
          <div className={`${styles.conditionItem} ${isPasswordHasNum ? '' : styles.errorTxt}`}>
            <img src={list} alt="" />
            {t('errors:min_1_number')}
          </div>
        </div>

      </div>

      <div className={styles.row}>
        <div className={`${styles.offer} ${isOfferValid ? '' : styles.error}`}>
          <div>
            {t('reg:more_than_21')} <span onClick={onOfferClick}>{t('reg:accept_offer')}</span>
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
            {t('reg:activate_bonus')} <span onClick={onBonusClick}>{t('reg:bonus_offer')}</span>
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
          <Button title={t('register')} />
        </div>
      </div>

      <div className={styles.regOffer}>
          {t('reg_first')}  
      </div>
      <div onClick={onOfferRulesClick} className={styles.regOfferBtn}>
          {t('reg_second')}
      </div>

      <div className={`${styles.row} ${styles.rowLast}`}>
        <div className={styles.enter}>
          {t('reg:have_account')} <span onClick={onLoginClick}>{t('to_enter')}</span>
        </div>
      </div>

    </div>
  )
}

export default Register