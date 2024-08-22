import styles from './Toast.module.scss'
import check from '../../assets/images/icons/check-circle.svg'
import warning from '../../assets/images/icons/warning-circle.svg'
import error from '../../assets/images/icons/error-circle.svg'

const Toast = ({ message, status }) => {
  return (
    <div className={`${styles.container}
                     ${status === 'warning' ? styles.warning :
                       status === 'error' ? styles.error : ''}`}>
      <div className={styles.icon}>
        {
          status === 'warning' ?
          <img src={warning} alt="" /> :
          status === 'error' ?
          <img src={error} alt="" /> :
          <img src={check} alt="" />
        }
      </div>
      <div className={styles.message}>
        {message}
      </div>
    </div>
  )
}

export default Toast