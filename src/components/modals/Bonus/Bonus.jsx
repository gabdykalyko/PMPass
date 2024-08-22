import { NavLink } from 'react-router-dom'
import styles from './Bonus.module.scss'
import close from '../../../assets/images/icons/close-btn.svg'

const Bonus = ({ closeForm, onRegisterClick }) => {
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
          onClick={onRegisterClick}>
          <img src={close} alt="" />
        </div>
        <div className={styles.title}>
          Правила и Условия
        </div>
        <div className={styles.offer}>
          <p className={styles.justify}><strong>Чтобы получить бонус +100% к первому пополнению счета</strong></p>
          <ul>
            <li>●	пополняйте игровой счет от 1000 тенге одним платежом без учета комиссии платежных систем;</li>
            <li>●	получите +100% к сумме пополнения;</li>
            <li>●	максимальный бонус – 150 000 тенге;</li>
            <li>●	делайте ставки и увеличивайте свой баланс.</li>
          </ul>
          <br />
          <p><b>Для вывода выигрыша с игрового счета:</b></p>

          <ul>
            <li>●	сделайте ставки «ординар» и/или «экспресс» на сумму в 15 раз больше бонуса с коэффициентом не менее 1.50 в течение 7 дней.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Bonus