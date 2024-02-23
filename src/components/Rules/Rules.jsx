import styles from './Rules.module.scss'
import defaultImg from '../../assets/images/default.jpg'
import Rule from '../Rule/Rule'

const rules = [
  {
    src: defaultImg,
    title: 'Свяжите Aккаунты',
    txt: 'Свяжите аккаунты Parimatch и Steam.'
  },
  {
    src: defaultImg,
    title: 'Бонусы и Очки',
    txt: 'Получайте бонусы и очки за каждый квест, выполняя ежедневные квесты в Dota2 и Parimatch.'
  },
  {
    src: defaultImg,
    title: 'Призы',
    txt: 'Выигрывайте призы в конце мероприятия!'
  },
  {
    src: defaultImg,
    title: 'Меняйте Баллы',
    txt: 'Меняйте баллы на бонусы, когда захотите!'
  },
]

const Rules = () => {
  return (
    <div className={`${styles.container} container-main`}>
      <div className={styles.title}>
        Правила Aкции
      </div>
      <div className={styles.rules}>
        {
          rules.map((rule, index) => (
            <Rule key={index}
                  src={rule.src}
                  title={rule.title}
                  txt={rule.txt}/>
          ))
        }
      </div>
    </div>
  )
}

export default Rules