import styles from './MatchHistory.module.scss'
import warning from '../../assets/images/icons/warning.svg'
import dota from '../../assets/images/icons/dota.svg'
import check from '../../assets/images/icons/check-green.svg'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const MatchHistory = () => {
  const user = useSelector(state => state.auth.user)

  const { t } = useTranslation('profile')

  return (
    <div className={styles.match}>
      <div className={styles.title}>
        <img src={dota} alt="" />
        {t('match_history')}
      </div>
      {
        user?.steam_private_match_data ?
          <div className={styles.success}>
            <img src={check} alt="" />
            {t('history_open')}
          </div> :
          <div>
            <div className={styles.txt}>
              <img src={warning} alt="" />
              {t('match_history_closed')}
            </div>
            <div className={styles.info}>
              <div className={styles.infoItem}>
                {t('go_to_settings')}
              </div>
              <div className={styles.infoItem}>
              {t('in_chapter')}
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default MatchHistory