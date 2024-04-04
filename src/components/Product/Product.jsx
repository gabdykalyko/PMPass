import { useSelector } from 'react-redux'
import styles from './Product.module.scss'
import defaultProduct from '../../assets/images/defaultProduct.png'

const Product = (props) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <div className={styles.img}>
          <img src={props.img ? props.img : defaultProduct} alt="" />
        </div>
      </div>

      <div className={styles.productName}>
        {props.name}
      </div>

      <div className={styles.productPrice}>
        {props.price}
      </div>

      {
        isAuthenticated ?
          <div className={styles.btn}>
            <button>
              Забрать
            </button>
          </div>
          :
          <div onClick={props.onRegisterClick}
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