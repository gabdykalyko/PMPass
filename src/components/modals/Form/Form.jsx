import Login from '../Login/Login'
import Register from '../Register/Register'
import close from '../../../assets/images/icons/close-btn.svg'
import styles from './Form.module.scss'

const Form = ({ showLogin, closeForm, onLoginClick }) => {
  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      closeForm()
    }
  }

  return (
    <div className={styles.wrapper}
         onClick={handleOutsideClick}>
      <div className={styles.container}>
        <div className={styles.closeBtn}
             onClick={closeForm}>
          <img src={close} alt="" />
        </div>
        {showLogin ? <Login /> : <Register onLoginClick={onLoginClick}/>}
      </div>
    </div>
  )
}

export default Form