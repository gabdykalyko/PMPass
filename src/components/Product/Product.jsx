import { useSelector } from 'react-redux'
import styles from './Product.module.scss'
import defaultProduct from '../../assets/images/defaultProduct.png'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from '../../components/Toast/Toast'
import { useState } from 'react';
import loader from '../../assets/images/loader.gif'
import { useDispatch } from "react-redux";
import { updateAuth } from '../../slices/authSlice';
import { updateUserAuth } from '../../utils/authUtils';

const Product = ({ onRegisterClick, quest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  const user = useSelector(state => state.auth.user)

  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const buy = async (id, type) => {
    if (!user.steam_trade_url) {
      toast(<Toast message="Необходимо прикрепить Trade Link!"
                     status='warning'/>, {
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
        toast(<Toast message="Поздравляем с покупкой!" />, {
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
        toast(<Toast message="Недостаточно средств на балансе!"
                     status='warning'/>, {
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
      <div className={styles.imgWrapper}>
        <div className={styles.img}>
          <img src={quest.img ? quest.img : defaultProduct} alt="" />
        </div>
      </div>

      <div className={styles.productName}>
        {quest.name}
      </div>

      <div className={styles.productPrice}>
        {quest.price}
      </div>

      {
        isAuthenticated ?
          <div className={styles.btn}
               onClick={onBuyClick}>
            <button disabled={loading}>
              {loading ? <img className={styles.loader} src={loader} alt="" /> : 'Забрать'}
            </button>
          </div>
          :
          <div onClick={onRegisterClick}
            className={styles.btn}>
            <button>
              Забрать
            </button>
          </div>
      }
    </div>
  )
}

export default Product