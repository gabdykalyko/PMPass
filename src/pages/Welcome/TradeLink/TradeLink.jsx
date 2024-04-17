import { useState } from 'react'
import Button from '../../../components/Button/Button'
import styles from './TradeLink.module.scss'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { updateAuth } from '../../../slices/authSlice'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from '../../../components/Toast/Toast'
import TradeLinkHelp from '../../../components/TradeLinkHelp/TradeLinkHelp'
import loader from '../../../assets/images/icons/loader.svg'
import arrowYellow from '../../../assets/images/icons/arrow-yellow.svg'
import arrowNext from '../../../assets/images/welcome/arrow-next-yellow.svg'

const TradeLink = ({ onClickPrevious, onClickNext }) => {
  const [link, setLink] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const value = e.target.value
    setLink(value)

    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/
    setIsValid(urlRegex.test(value))
  }

  const handleTradeClick = () => {
    document.body.style.overflow = 'hidden'
    setIsFormOpen(true)
  }

  const closeForm = () => {
    document.body.style.overflow = 'auto'
    setIsFormOpen(false)
  }

  const attachTradeLink = async (link) => {
    if (!link) {
      setIsValid(false)
      return
    }

    try {
      setLoading(true)
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

        toast(<Toast message="Ссылка на обмен прикреплена" />, {
          hideProgressBar: true
        })

        onClickNext()
      }

    } catch (error) {
      setIsValid(false)
      toast(<Toast message="Неверный формат ссылки на обмен"
        status='error' />, {
        hideProgressBar: true
      });
      console.error(error);
    } finally {
      setLoading(false)
    }
  }

  const Enter = () => {
    if (!isValid) {
      toast(<Toast message="Неверный формат ссылки на обмен"
        status='error' />, {
        hideProgressBar: true
      });

      return
    }

    attachTradeLink(link)
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div onClick={onClickPrevious}
              className={styles.back}>
            <img src={arrowYellow} alt="" />
            Назад
        </div>

        <div className={styles.trade}>
          <div className={styles.title}>
            Trade Link
          </div>

          <div className={styles.info}>
            Прикрепите свою ссылку на обмен из Steam, чтобы получать скины и игровые предметы в магазине PM Pass
          </div>

          <div className={styles.inputWrapper}>
            <div>
              Ссылка
            </div>
            <div className={`${styles.input} ${isValid ? '' : styles.error}`}>
              <input onChange={handleChange}
                     type="text"
                     value={link}
                     placeholder='https://'/>
            </div>
          </div>

          <div className={styles.btns}>
            <div className={styles.btn}
                onClick={Enter}>
              <button disabled={loading}>
                {loading ? <img className={styles.loader} src={loader} alt="" /> : 'Прикрепить'}
              </button>
            </div>
            <div className={styles.getTrade} onClick={handleTradeClick}>
              Как получить ссылку?
            </div>
          </div>

          <div className={styles.skipInfo}>
            Вы можете пропустить этот шаг и прикрепить ссылку позже
          </div>
        </div>

        <div onClick={onClickNext}
             className={styles.skipBtn}>
          <button>
            Пропустить
            <img src={arrowNext} alt="" />
          </button>
        </div>
      </div>

      {isFormOpen && <TradeLinkHelp closeForm={closeForm}/>}
    </div>
  )
}

export default TradeLink