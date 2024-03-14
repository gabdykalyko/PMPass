import styles from './MatchHistory.module.scss'
import warning from '../../assets/images/icons/warning.svg'
import dota from '../../assets/images/icons/dota.svg'
import check from '../../assets/images/icons/check-green.svg'
import { useSelector } from 'react-redux'

const MatchHistory = () => {
  const user = useSelector(state => state.auth.user)

  return (
    <div className={styles.match}>
      <div className={styles.title}>
        <img src={dota} alt="" />
        История Матчей
      </div>
      {
        user?.steam_private_match_data ?
          <div className={styles.success}>
            <img src={check} alt="" />
            Ваша история матчей открыта
          </div> :
          <div>
            <div className={styles.txt}>
              <img src={warning} alt="" />
              История матчей закрыта, проверьте настройки
            </div>
            <div className={styles.info}>
              <div className={styles.infoItem}>
                Зайдите на сайт Dota 2  и перейдите в раздел <span>Настройки</span>.
              </div>
              <div className={styles.infoItem}>
                В разделе <span>Сообщество</span> вы увидите <span>Общедоступная история матчей</span>, нажмите на него и история будет открыта.
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default MatchHistory