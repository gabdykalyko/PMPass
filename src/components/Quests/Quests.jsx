import Button from '../Button/Button'
import styles from './Quests.module.scss'
import defaultImg from '../../assets/images/default-img.jpg'
import quests from '../../assets/images/quests.png'

const Quests = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} container-main`}>
        <div className={styles.img}>
          <img src={quests} alt="" />
        </div>
        <div className={styles.info}>
          <div>
            <div className={styles.title}>
              Квесты
            </div>
            <div className={styles.txt}>
              Короткое описание про задания, которые мы предлагаем выполнять.
            </div>
            <div className={styles.txt}>
              Описание основных моментов, что требуется от игрока для выполнения заданий и получения наград.
            </div>
            <div>
              <Button title="Начать" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quests