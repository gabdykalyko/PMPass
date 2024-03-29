import styles from './Toast.module.scss'
import check from '../../assets/images/icons/check-circle.svg'

const Toast = ({ message }) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={check} alt="" />
      </div>
      <div>
        {message}
      </div>
    </div>
  )
}

export default Toast