import styles from './Product.module.scss'

const Product = (props) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={props.img} alt="" />
      </div>

      <div className={styles.productName}>
        {props.name}
      </div>

      <div className={styles.productPrice}>
        {props.price}
      </div>

      <div className={styles.btn}>
        <button>
          Забрать
        </button>
      </div>
    </div>
  )
}

export default Product