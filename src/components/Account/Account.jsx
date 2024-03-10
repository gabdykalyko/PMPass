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

const Account = () => {
  const { t } = useTranslation('profile')

  const userInfo = useSelector(state => state.auth.user)

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  };

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} container-main`}>
        <div className={styles.title}>
          {t('title')}
        </div>

        <div className={styles.account}>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <img src={account} alt="" />
              <div>
                Информация об Аккаунте
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
                  onClick={() => copyToClipboard(userInfo?.pm_id)}>
                  <img src={copy} alt="" />
                </div>
              </div>

              <div className={styles.address}>
                Город, улица
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
                    onClick={() => copyToClipboard(userInfo?.steam_id)}>
                    <img src={copy} alt="" />
                  </div>
                </div>
                <div>
                  {userInfo?.steam_id ? userInfo?.steam_id : '-'}
                </div>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div>
                <img src={check} alt="" />
              </div>
              <div>
                <div className={styles.steam}>
                  Получено очков
                </div>
                <div>
                  80000 GG Points
                </div>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div>
                <img src={thumb} alt="" />
              </div>
              <div>
                <div className={styles.steam}>
                  Текущий баланс
                </div>
                <div>
                  10000 GG Points
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