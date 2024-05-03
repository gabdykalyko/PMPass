import { useSelector } from 'react-redux'
import styles from './Product.module.scss'
import defaultProduct from '../../assets/images/defaultProduct.png'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from '../../components/Toast/Toast'
import { useState } from 'react';
import loader from '../../assets/images/icons/loader.svg'
import { useDispatch } from "react-redux";
import { updateAuth } from '../../slices/authSlice';
import { updateUserAuth } from '../../utils/authUtils';
import { useTranslation } from 'react-i18next'

const Product = ({ onLoginClick, quest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  const user = useSelector(state => state.auth.user)

  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const { t } = useTranslation(['main', 'notifications'])

  const buy = async (id, type) => {
    if (!user.steam_trade_url) {
      toast(<Toast message={t('notifications:add_trade_link')}
        status='warning' />, {
        hideProgressBar: true
      })

      return
    }

    try {
      setLoading(true)

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/shop_items/${id}/buy_${type}`,
        null,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );

      if (response.data) {
        toast(<Toast message={t('notifications:present_send')} />, {
          hideProgressBar: true
        })

        const user = await updateUserAuth()

        if (user) {
          dispatch(updateAuth({
            isAuthenticated: true,
            user: user
          }));
        }
      }

    } catch (error) {
      console.error(error)

      if (error.response.data.errors.includes('user_has_not_enough_pm_points')) {
        toast(<Toast message={t('notifications:not_enough_cash')}
          status='warning' />, {
          hideProgressBar: true
        })
      }
    } finally {
      setLoading(false)
    }
  }

  const onBuyClick = () => {
    buy(quest.id, quest.item_type)
  }

  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper} style={{ backgroundImage: `url(${quest.image ? quest.image : defaultProduct})` }}>
        {/* <img src={quest.image ? quest.image : defaultQuest} alt="" /> */}
      </div>

      <div className={styles.productName}>
        {quest.name}
      </div>

      <div className={styles.productPrice}>
        {quest.price} GG Points
      </div>

      {
        isAuthenticated ?
          <div className={styles.btn}
            onClick={onBuyClick}>
            <button disabled={loading}>
              {loading ? <img className={styles.loader} src={loader} alt="" /> : t('take')}
            </button>
          </div>
          :
          <div onClick={onLoginClick}
            className={styles.btn}>
            <button>
              {t('take')}
            </button>
          </div>
      }
    </div>
  )
}

export default Product