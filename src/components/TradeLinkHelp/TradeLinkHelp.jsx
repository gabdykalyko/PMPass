import styles from './TradeLinkHelp.module.scss'
import list from '../../assets/images/icons/list-yellow.svg'
import Button from '../Button/Button'

const TradeLinkHelp = ({ closeForm }) => {
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
          Как Получить Ссылку
        </div>
        <div className={styles.subtitle}>
          Чтобы найти свой трейд URL в Steam, выполните следующие действия:
        </div>

        <div className={styles.list}>
          <div className={styles.listItem}>
            <img className={styles.listImage}
              src={list}
              alt="" />
            Наведите на свой никнейм, чтоб выпало меню профиля;
          </div>
          <div className={styles.listItem}>
            <img className={styles.listImage}
              src={list}
              alt="" />
            Перейдите в <span>Инвентарь</span>;
          </div>
          <div className={styles.listItem}>
            <img className={styles.listImage}
              src={list}
              alt="" />
            Кликните кнопку: <span>“Предложения обмена”</span>;
          </div>
          <div className={styles.listItem}>
            <img className={styles.listImage}
              src={list}
              alt="" />
            Откройте: <span>"Кто может отправлять мне предложения обмена?"</span>;
          </div>
          <div className={styles.listItem}>
            <img className={styles.listImage}
              src={list}
              alt="" />
            В графе <span>"Сторонние сайты"</span> есть поле <span>"Ссылка на обмен"</span>.
          </div>
          <div className={styles.listItem}>
            Тут внизу и находится трейд ссылка Steam.
          </div>
        </div>

        <div className={styles.btn}>
          <div onClick={closeForm}>
            <Button title='Понятно' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TradeLinkHelp