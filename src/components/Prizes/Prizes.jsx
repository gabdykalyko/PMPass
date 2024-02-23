import Button from '../Button/Button'
import styles from './Prizes.module.scss'
import defaultImg from '../../assets/images/default-img.jpg'

const Prizes = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} container-main`}>

        <div className={styles.info}>
          <div>
            <div className={styles.title}>
              Призы
            </div>
            <div className={styles.txt}>
              Короткое описание про море призов, которые игрок может тут получить.
            </div>
            <div className={styles.txt}>
              Описание про магазин и условия его использования.
            </div>
            <div className={styles.btn}>
              <Button title="Начать" />
            </div>
          </div>
        </div>
        
        <div className={styles.img}>
          <img src={defaultImg} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Prizes