import Login from '../Login/Login'
import Register from '../Register/Register'
import close from '../../../assets/images/icons/close.svg'
import styles from './Form.module.scss'
import Help from '../Help/Help'

const Form = ({ showLogin,
                closeForm,
                onLoginClick,
                onRegisterClick,
                onHelpClick,
                showHelp,
                onOfferClick,
                onBonusClick}) => {
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
        {showHelp ? <Help onLoginClick={onLoginClick}/> : showLogin ? <Login onRegisterClick={onRegisterClick}
                                                  onHelpClick={onHelpClick}
                                                  closeForm={closeForm}/>
                                         : <Register onLoginClick={onLoginClick}
                                                     onOfferClick={onOfferClick}
                                                     onBonusClick={onBonusClick}
                                                     closeForm={closeForm}/>}
      </div>
    </div>
  )
}

export default Form