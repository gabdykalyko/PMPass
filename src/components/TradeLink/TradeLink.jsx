import styles from './TradeLink.module.scss'
import warning from '../../assets/images/icons/warning.svg'
import steam from '../../assets/images/icons/steam-blue.svg'
import Button from '../Button/Button'
import check from '../../assets/images/icons/check-green.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import axios from 'axios'
import { updateAuth } from '../../slices/authSlice'

const TradeLink = ({ handleTradeClick }) => {
  const user = useSelector(state => state.auth.user)

  const dispatch = useDispatch()

  const [link, setLink] = useState('')
  const [isValid, setIsValid] = useState(true)

  const handleChange = (e) => {
    const value = e.target.value
    setLink(value)

    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/
    setIsValid(urlRegex.test(value))
  }

  const attachTradeLink = async (link) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/profile`, {
        "steam_trade_url": link
      }, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })

      if (response.data) {
        dispatch(updateAuth({
          isAuthenticated: true,
          user: response.data
        }))
      }

    } catch (error) {
      console.error(error);
    }
  }

  const Enter = () => {
    if (!isValid) {
      return
    }

    attachTradeLink(link)
  }

  return (
    <div className={styles.trade}>
      <div className={styles.title}>
        <img src={steam} alt="" />
        Trade Link
      </div>

      {
        user?.steam_trade_url ?
          <div className={styles.success}>
            <div className={styles.attached}>
              <img src={check} alt="" />
              Ваша ссылка на обмен из Steam прикреплена
            </div>
            <div className={styles.linkWrapper}>
              <div>
                Ссылка
              </div>
              <div className={styles.link}>
                {user.steam_trade_url}
              </div>
            </div>
          </div> :
          <div>
            <div className={styles.txt}>
              <img src={warning} alt="" />
              Прикрепите вашу ссылку на обмен из Steam
            </div>
            <div className={styles.input}>
              <div className={styles.subtitle}>
                Ссылка
              </div>
              <div className={`${styles.inputWrapper} ${isValid ? '' : styles.error}`}>
                <input type="text"
                  placeholder='http//:'
                  value={link}
                  onChange={handleChange} />
              </div>
            </div>
            <div className={styles.btns}>
              <div onClick={Enter}>
                <Button title='Прикрепить' />
              </div>
              <div onClick={handleTradeClick}>
                <Button color='brown'
                  title='Как получить ссылку?' />
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default TradeLink