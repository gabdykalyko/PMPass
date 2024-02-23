import Header from '../../components/Header/Header'
import HeaderMob from '../../components/HeaderMob/HeaderMob'
import styles from './Quests.module.scss'
import pudge from '../../assets/images/pudge.jpg'
import Quest from '../../components/Quest/Quest'
import Footer from '../../components/Footer/Footer'

const quests = [
  {
    img: pudge,
    chest: 'Сундук Аркана',
    status: 'Активен',
    price: '10000 Points',
    name: 'Становление Героя',
    task: 'Сделайте 3 депозита от 2000 до 4999 тг.',
    labels: ['Parimatch', 'Dota 2'],
  },
  {
    img: pudge,
    chest: 'Сундук Аркана',
    status: 'Скоро',
    name: 'Становление Героя',
    task: 'Сделайте 3 депозита от 2000 до 4999 тг.',
    pm: 'Parimatch',
    labels: ['Parimatch', 'Dota 2']
  },
  {
    img: pudge,
    chest: 'Сундук Аркана',
    status: 'Завершён',
    name: 'Становление Героя',
    task: 'Сделайте 3 депозита от 2000 до 4999 тг.',
    pm: 'Parimatch',
    labels: ['Parimatch', 'Dota 2']
  },
  {
    img: pudge,
    chest: 'Сундук Аркана',
    status: 'Активен',
    name: 'Становление Героя',
    task: 'Сделайте 3 депозита от 2000 до 4999 тг.',
    labels: ['Parimatch', 'Dota 2'],
  },
  {
    img: pudge,
    chest: 'Сундук Аркана',
    status: 'Скоро',
    name: 'Становление Героя',
    task: 'Сделайте 3 депозита от 2000 до 4999 тг.',
    pm: 'Parimatch',
    labels: ['Parimatch', 'Dota 2']
  },
  {
    img: pudge,
    chest: 'Сундук Аркана',
    status: 'Завершён',
    name: 'Становление Героя',
    task: 'Сделайте 3 депозита от 2000 до 4999 тг.',
    pm: 'Parimatch',
    labels: ['Parimatch', 'Dota 2']
  }
]

const Quests = () => {
  return (
    <div>
      <Header />
      <HeaderMob />
      <div className={`${styles.container} container-main`}>
        <div className={styles.title}>
          Квесты
        </div>
        <div className={styles.wrapper}>
          {quests.map((quest, index) => (
            <Quest key={index}
              img={quest.img}
              chest={quest.chest}
              status={quest.status}
              price={quest.price}
              name={quest.name}
              task={quest.task}
              labels={quest.labels} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Quests