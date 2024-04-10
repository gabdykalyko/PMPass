import styles from './Account.module.scss'
import { useTranslation } from 'react-i18next'
import account from './../../assets/images/icons/account.svg'
import edit from '../../assets/images/icons/edit.svg'
import { useSelector } from 'react-redux'
import defaultUserImg from '../../assets/images/defaultUser.svg'
import copy from '../../assets/images/icons/copy.svg'
import steam from '../../assets/images/icons/steam-small.svg'
import thumb from '../../assets/images/icons/thumb.svg'
import check from '../../assets/images/icons/check-circle.svg'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from '../../components/Toast/Toast'

const Account = () => {
  const { t } = useTranslation('profile')

  const userInfo = useSelector(state => state.auth.user)

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text)

    if (type === 'account') {
      toast(<Toast message="Account ID скопирован" />, {
        hideProgressBar: true
      })
    } else if (type === 'steam') {
      toast(<Toast message="Steam ID скопирован" />, {
        hideProgressBar: true
      })
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} container-main`}>
        <div className={styles.account}>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <img src={account} alt="" />
              <div>
                Аккаунт
              </div>
            </div>
            <div className={styles.headerRight}>
              <NavLink to='/settings'>
                <img src={edit} alt="" />
              </NavLink>
            </div>
          </div>

          <div className={styles.main}>
            <img className={styles.profileImg} src={defaultUserImg} alt="" />
            <div>
              <div className={styles.name}>
                <div>
                  Account ID:
                </div>
                <div>
                  <div className={styles.id}>
                    {userInfo?.pm_id}
                  </div>
                </div>
                <div className={styles.copy}
                  onClick={() => copyToClipboard(userInfo?.pm_id, 'account')}>
                  <img src={copy} alt="" />
                </div>
              </div>

              <div className={styles.address}>
                +77072396767
              </div>
            </div>
          </div>

          <div className={styles.info}>
            <div className={styles.infoItem}>
              <div>
                <img src={steam} alt="" />
              </div>
              <div>
                <div className={styles.steam}>
                  Steam ID
                  <div className={styles.copy}
                    onClick={() => copyToClipboard(userInfo?.steam_id, 'steam')}>
                    <img src={copy} alt="" />
                  </div>
                </div>
                <div>
                  {userInfo?.steam_id ? userInfo?.steam_id : '-'}
                </div>
              </div>
            </div>

            {/* <div className={styles.infoItem}>
              <div>
                <img src={check} alt="" />
              </div>
              <div>
                <div className={styles.steam}>
                  Получено очков
                </div>
                <div>
                  0 GG Points
                </div>
              </div>
            </div> */}

            <div className={styles.infoItem}>
              <div>
                <img src={thumb} alt="" />
              </div>
              <div>
                <div className={styles.steam}>
                  Текущий баланс
                </div>
                <div>
                  { userInfo.pm_points } GG Points
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account