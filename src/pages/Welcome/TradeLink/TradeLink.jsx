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
import { useTranslation } from 'react-i18next'

const TradeLink = ({ onClickPrevious, onClickNext }) => {
  const { t } = useTranslation(['main', 'welcome', 'notifications'])

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

        toast(<Toast message={t('notifications:trade_link_attached')} />, {
          hideProgressBar: true
        })

        onClickNext()
      }

    } catch (error) {
      setIsValid(false)
      toast(<Toast message={t('notifications:wrong_trade_link')}
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
      toast(<Toast message={t('notifications:wrong_trade_link')}
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
          {t('back')}
        </div>

        <div className={styles.trade}>
          <div className={styles.title}>
            Trade Link
          </div>

          <div className={styles.info}>
            {t('welcome:trade_link_text1')}
          </div>

          <div className={styles.inputWrapper}>
            <div>
              {t('link')}
            </div>
            <div className={`${styles.input} ${isValid ? '' : styles.error}`}>
              <input onChange={handleChange}
                type="text"
                value={link}
                placeholder='https://' />
            </div>
          </div>

          <div className={styles.btns}>
            <div className={styles.btn}
              onClick={Enter}>
              <button disabled={loading}>
                {loading ? <img className={styles.loader} src={loader} alt="" /> : t('attach')}
              </button>
            </div>
            <div className={styles.getTrade} onClick={handleTradeClick}>
              {t('welcome:trade_link_text2')}
            </div>
          </div>

          <div className={styles.skipInfo}>
            {t('welcome:skip_step')}
          </div>
        </div>

        <div onClick={onClickNext}
          className={styles.skipBtn}>
          <button>
            {t('skip')}
            <img src={arrowNext} alt="" />
          </button>
        </div>
      </div>

      {isFormOpen && <TradeLinkHelp closeForm={closeForm} />}
    </div>
  )
}

export default TradeLink