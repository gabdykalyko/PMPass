import styles from './TradeLinkHelp.module.scss'
import list from '../../assets/images/icons/list-yellow.svg'
import Button from '../Button/Button'
import { useTranslation } from 'react-i18next'

const TradeLinkHelp = ({ closeForm }) => {
  const { t } = useTranslation(['main', 'help', 'welcome'])

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      closeForm()
    }
  }

  return (
    <div className={styles.wrapper}
      onClick={handleOutsideClick}>
      <div className={styles.container}>
        <div className={styles.title}>
          {t('welcome:trade_link_text2')}
        </div>
        <div className={styles.subtitle}>
          {t('help:find_trade_link')}
        </div>

        <div className={styles.list}>
          <div className={styles.listItem}>
            <img className={styles.listImage}
              src={list}
              alt="" />
            {t('help:find_nickname')}
          </div>
          <div className={styles.listItem}>
            <img className={styles.listImage}
              src={list}
              alt="" />
            {t('help:go_to')}
          </div>
          <div className={styles.listItem}>
            <img className={styles.listImage}
              src={list}
              alt="" />
            {t('help:click_button')}
          </div>
          <div className={styles.listItem}>
            <img className={styles.listImage}
              src={list}
              alt="" />
            {t('help:open')}
          </div>
          <div className={styles.listItem}>
            <img className={styles.listImage}
              src={list}
              alt="" />
            {t('help:trade_text1')}
          </div>
          <div className={styles.listItem}>
            {t('help:down_here')}
          </div>
        </div>

        <div className={styles.btn}>
          <div onClick={closeForm}>
            <Button title={t('clear')} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TradeLinkHelp