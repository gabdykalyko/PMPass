import styles from './TradeLink.module.scss'
import warning from '../../assets/images/icons/warning.svg'
import steam from '../../assets/images/icons/steam-blue.svg'
import Button from '../Button/Button'
import check from '../../assets/images/icons/check-green.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { updateAuth } from '../../slices/authSlice'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from '../../components/Toast/Toast'
import edit from '../../assets/images/icons/edit.svg'
import { useTranslation } from 'react-i18next'

const TradeLink = ({ handleTradeClick }) => {
  const { t } = useTranslation(['main', 'notifications', 'profile', 'welcome'])

  const user = useSelector(state => state.auth.user)

  const dispatch = useDispatch()

  const [link, setLink] = useState('')
  const [isValid, setIsValid] = useState(true)

  const [editTrade, setEditTrade] = useState(false)

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

        toast(<Toast message={t('notifications:trade_link_attached')} />, {
          hideProgressBar: true
        });

        setEditTrade(false)
      }

    } catch (error) {
      setIsValid(false)
      toast(<Toast message={t('notifications:wrong_trade_link')}
        status='error' />, {
        hideProgressBar: true
      });
      console.error(error);
    }
  }

  const handleEditTrade = () => {
    setEditTrade(true)
  }

  const cancelEdit = () => {
    setEditTrade(false)
    setIsValid(true)
    setLink(user?.steam_trade_url)
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

  useEffect(() => {
    setLink(user?.steam_trade_url)
  }, []);

  return (
    <div className={styles.trade}>
      <div className={styles.title}>
        <div className={styles.titleInfo}>
          <img src={steam} alt="" />
          Trade Link
        </div>
        {
          !editTrade &&
          <div className={styles.editBtn} onClick={handleEditTrade}>
            <img src={edit} alt="" />
          </div>
        }
      </div>

      {
        user?.steam_trade_url ?
          <div className={styles.success}>
            {
              editTrade ?
                <div className={styles.txt}>
                  <img src={warning} alt="" />
                  {t('attach_trade_link')}
                </div> :
                <div className={styles.attached}>
                  <img src={check} alt="" />
                  {t('profile:steam_attached')}
                </div>
            }
            {
              editTrade ?
                <div className={styles.input}>
                  <div className={styles.subtitle}>
                    {t('link')}
                  </div>
                  <div className={`${styles.inputWrapper} ${isValid ? '' : styles.error}`}>
                    <input type="text"
                      disabled={!editTrade}
                      placeholder='https://'
                      value={link}
                      onChange={handleChange} />
                  </div>
                </div> :
                <div className={styles.linkWrapper}>
                  <div>
                    {t('link')}
                  </div>
                  <div className={styles.link}>
                    {user?.steam_trade_url}
                  </div>
                </div>
            }
            {
              editTrade &&
              <div className={styles.btns}>
                <div onClick={Enter}>
                  <Button title={t('attach')} />
                </div>
                <div onClick={cancelEdit}>
                  <Button color='brown'
                    title={t('cancel')} />
                </div>
              </div>
            }
          </div> :
          <div>
            <div className={styles.txt}>
              <img src={warning} alt="" />
              {t('attach_trade_link')}
            </div>
            <div className={styles.input}>
              <div className={styles.subtitle}>
                {t('link')}
              </div>
              <div className={`${styles.inputWrapper} ${isValid ? '' : styles.error}`}>
                <input type="text"
                  disabled={!editTrade}
                  placeholder='https://'
                  value={link}
                  onChange={handleChange} />
              </div>
            </div>
            {
              editTrade ?
                <div className={styles.btns}>
                  <div onClick={Enter}>
                    <Button title={t('attach')} />
                  </div>
                  <div onClick={cancelEdit}>
                    <Button color='brown'
                      title={t('cancel')} />
                  </div>
                </div> :
                <div className={styles.instruction}
                  onClick={handleTradeClick}>
                  {t('welcome:trade_link_text2')}
                </div>
            }
          </div>
      }
    </div>
  )
}

export default TradeLink