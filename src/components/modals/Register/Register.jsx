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

const Register = ({ onLoginClick }) => {
  const [isOfferChecked, setIsOfferChecked] = useState(false)
  const [isBonusChecked, setIsBonusChecked] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

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
    if (!password.length || !phoneNumber.length || !isPasswordHasNum || !isPasswordMin) {
      return
    }

    // login(id, password)
    // auth()
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        Регистрация
      </div>
      <div className={styles.row}>
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
                   onChange={(e) => onPasswordChange(e.target.value)}/>
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
            Мне больше 21 года <span>Я соглашаюсь с договором оферты</span>
          </div>
          <label>
            <input type="checkbox"
                   checked={isOfferChecked}
                   onChange={handleOfferChange}/>
            <img src={getOfferSrc()} alt="" />
          </label>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.offer}>
          <div>
            Активировать бонус на первый депозит <span>Условия бонусного предложения</span>
          </div>
          <label>
            <input type="checkbox"
                   checked={isBonusChecked}
                   onChange={handleBonusChange}/>
            <img src={getBonusrSrc()} alt="" />
          </label>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.btn}>
          <Button title='Регистрация'/>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.enter}>
          Есть аккаунт? <span onClick={onLoginClick}>Войти</span>
        </div>
      </div>

    </div>
  )
}

export default Register