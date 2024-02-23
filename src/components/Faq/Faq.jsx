import { useState } from 'react';
import styles from './Faq.module.scss'
import arrowup from '../../assets/images/arrowup.svg'
import arrowdown from '../../assets/images/arrowdown.svg'
import list from '../../assets/images/list.svg'

const Faq = () => {
  const [openItems, setOpenItems] = useState({});

  const faqData = [
    {
      id: 1,
      question: 'Как связать аккаунты Parimatch и Steam?',
      answer: `<div class="${styles.paragraph}">Убедитесь, что вы выставили настройки приватности в Dota 2 следующим образом, чтобы была открыта ваша история игр.</div>
      <div class="${styles.paragraph}">Также вам необходимо быть зарегистрированным клиентом на сайте или в приложении <a class="${styles.link}" href="">parimatch.kz</a> </div>
      <div class="${styles.paragraph}">Если вы не зарегистрированы, перейдите по этой ссылке <a class="${styles.link}" href="">https://parimatch.kz/ru/regtel/3</a> и создайте учетную запись в Parimatch. </div>
      <div class="${styles.paragraph}">Далее вам необходимо на этой странице нажать на кнопку “Участвовать”. Введите в форму ваш ID Parimatch и пароль, с которым вы зарегистрировались. </div>
      <div class="${styles.paragraph}">Скопировать свой ID можно в разделе “Мой аккаунт” - <a class="${styles.link}" href="">https://parimatch.kz/ru/my-account</a> </div>
      `
    },
    {
      id: 2,
      question: 'Зачем привязывать аккаунт Steam?',
      answer: 'Квесты можно выполнять не только на сайте Parimatch, но и в Dota 2. Если вы привяжете аккаунт Steam, вы сможете наслаждаться любимой игрой и получать за это призы!'
    },
    {
      id: 3,
      question: 'Могу ли я принять учавстие без аккаунта Steam?',
      answer: `<div class="${styles.paragraph}">Да, вы можете участвовать, выполняя квесты, не связанные с Dota 2. Для этого вам нужен только аккаунт Parimatch.</div>
      Переходите в раздел геймификации PM Hero и начинайте играть прямо сейчас.
      `
    },
    {
      id: 4,
      question: 'Как принять участие?',
      answer: `<div class="${styles.paragraph}">Чтобы принять участие:</div>
      <div class="${styles.listItem}">
        <img src="${list}" />Авторизуйтесь и перейдите на страницу;
      </div>
      <div class="${styles.listItem}">
        <img src="${list}" />Нажмите на кнопку «Принять вызов», чтобы подтвердить участие;
      </div>
      <div class="${styles.listItem}">
        <img src="${list}" />Выполняйте квесты каждый день и получайте гарантированные сундуки с призами и кристаллами;
      </div>
      <div class="${styles.listItem}">
        <img src="${list}" />Собирайте кристаллы из сундуков и поднимайтесь в рейтинге игроков;
      </div>
      <div class="${styles.listItem}">
        <img src="${list}" />Принимайте участие в еженедельных розыгрышах призов, включая ноутбук Lenovo Legion Pro 7, ASUS TUF Gaming, Iphone 14 Pro Max, PlayStation 5, Apple Watch 8, Airpods 3 поколения, бонусы на сумму 5 000 000 тенге еженедельно и FreeBet суммой до 100 000 тенге каждый;
      </div>
      <div class="${styles.listItem}">
        <img src="${list}" />Собирайте кристаллы из сундуков и поднимайтесь в рейтинге игроков;
      </div>
      Чем выше сумма ставки, тем выше рейтинг и круче призы.
      `
    },
    {
      id: 5,
      question: 'Кто может учавствовать?',
      answer: `Могут участвовать лица, достигшие 21 года на момент начала акции, являющиеся гражданами Республики Казахстан, проживающие на территории Республики Казахстан и имеющие действительное удостоверение личности гражданина Республики Казахстан.
      `
    },
  ];

  const toggleAccordion = id => {
    setOpenItems(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <div className={`${styles.container} container-main`}>
      <div className={styles.title}>
        FAQ
      </div>
      {faqData.map((item, index) => (
        <div key={item.id} className={styles.item}>
          <div className={`${styles.question} ${openItems[item.id] ? `${styles.active}` : ''}`}
            onClick={() => toggleAccordion(item.id)}>

            <div>
              {item.question}
            </div>
            <div className="arrow-icon">
              {openItems[item.id] ?
                <img src={arrowup} alt="" /> :
                <img src={arrowdown} alt="" />}
            </div>
          </div>

          <div className={`${styles.answer} ${openItems[item.id] ? `${styles.open}` : ''}`}>
            <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Faq