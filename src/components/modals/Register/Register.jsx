import styles from './Register.module.scss'

const Register = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        Регистрация
      </div>
      <div className={styles.row}>
        <div className={styles.label}>
          Номер телефона<span>*</span>
        </div>
        <div className={styles.input}>
          <div>
            <input type="text" />
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register