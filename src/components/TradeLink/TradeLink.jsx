import styles from './TradeLink.module.scss'
import warning from '../../assets/images/icons/warning.svg'
import steam from '../../assets/images/icons/steam-blue.svg'
import Button from '../Button/Button'
import check from '../../assets/images/icons/check-green.svg'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const TradeLink = ({ handleTradeClick }) => {
  const user = useSelector(state => state.auth.user)

  const [link, setLink] = useState('')
  const [isValid, setIsValid] = useState(true)

  const handleChange = (e) => {
    const value = e.target.value
    setLink(value)

    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/
    setIsValid(urlRegex.test(value))
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
              <Button title='Прикрепить' />
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