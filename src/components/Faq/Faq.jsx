import { useState } from 'react';
import styles from './Faq.module.scss'
import arrowup from '../../assets/images/icons/arrow-up.svg'
import arrowdown from '../../assets/images/icons/arrowdown.svg'
import list from '../../assets/images/icons/list.svg'
import { useTranslation } from 'react-i18next'
import telegram from '../../assets/images/social/telegram.svg'
import phone from '../../assets/images/social/phone.svg'

const Faq = () => {
  const [openItems, setOpenItems] = useState({});

  const { t } = useTranslation(['faq', 'main'])

  const faqData = [
    {
      id: 1,
      question: t('question1'),
      answer: `<div class="${styles.paragraph}">${t('answer1_text1')}</div>
      <div class="${styles.paragraph}">${t('answer1_text2')}</div>
      <div class="${styles.paragraph}">${t('answer1_text3')}</div>
      <div class="${styles.paragraph}">${t('answer1_text4')}</div>
      <div class="${styles.paragraph}">${t('answer1_text5')}</div>
      `
    },
    {
      id: 2,
      question: t('question2'),
      answer: t('answer2')
    },
    {
      id: 3,
      question: t('question6'),
      answer: `<div class="${styles.paragraph}">${t('answer6_text1')}</div>
      <div class="${styles.paragraph}">${t('answer6_text2')}</div>
      <div class="${styles.listItem}">
        <img src="${list}" />${t('answer6_text3')}
      </div>
      <div class="${styles.listItem}">
        <img src="${list}" />${t('answer6_text4')}
      </div>
      <div class="${styles.listItem}">
        <img src="${list}" />${t('answer6_text5')}
      </div>
      <div class="${styles.listItem}">
        <img src="${list}" />${t('answer6_text6')}
      </div>
      <div class="${styles.listItem}">
        <img src="${list}" class="${styles.listImg}" />${t('answer6_text7')}
      </div>
      `
    },
    {
      id: 4,
      question: t('question3'),
      answer: `<div class="${styles.paragraph}">${t('answer3_text1')}</div>
      ${t('answer3_text2')}
      `
    },
    {
      id: 5,
      question: t('question4'),
      answer: `<div class="${styles.paragraph}">${t('answer4_text1')}</div>
      <div class="${styles.listItem}">
        <img src="${list}" />${t('answer4_text2')}
      </div>
      <div class="${styles.listItem}">
        <img src="${list}" />${t('answer4_text3')}
      </div>
      <div class="${styles.listItem}">
        <img src="${list}" />${t('answer4_text4')}
      </div>
      <div class="${styles.listItem}">
        <img src="${list}" />${t('answer4_text5')}
      </div>
      `
    },
    {
      id: 6,
      question: t('question5'),
      answer: t('answer5')
    },
    {
      id: 7,
      question: t('main:help'),
      answer: `<div class="${styles.paragraph}">${t('answer7')}</div>
      <div class="${styles.help}">
        <a class="${styles.tg}" href='https://t.me/PMKzSupport_bot' target='_blank'>
          <img src=${telegram} alt="" />
        </a>
        <a class="${styles.phone}" href='tel:9933' target='_blank'>
          <img src=${phone} alt="" />
          9933
        </a>
      </div>
      `
    },
    {
      id: 8,
      question: 'Почему я не могу совершить покупку в магазине?',
      answer: `<div class="${styles.paragraph}">Если вы столкнулись с трудностями при попытке совершить покупку, это может быть связано с одной из следующих причин:</div>
        <div class="${styles.listItem} ${styles.listItemBig}">
          <img src="${list}" />Нет трейд ссылки в профиле: Для совершения покупок в нашем магазине необходимо, чтобы у вас была указана актуальная трейд ссылка в вашем профиле. Проверьте, что вы добавили её, и она верная.
        </div>
        <div class="${styles.listItem} ${styles.listItemBig}">
          <img src="${list}" />Закрыт инвентарь в Steam: Ваш инвентарь в Steam должен быть открыт для всех. Это необходимо для успешной передачи предметов. Пожалуйста, убедитесь, что настройки приватности вашего инвентаря позволяют его просмотр.
        </div>
        <div class="${styles.listItem} ${styles.listItemBig}">
          <img src="${list}" />Превышен лимит покупок в час: В целях безопасности и предотвращения мошенничества, у нас есть лимит на количество покупок, которые можно совершить в течение одного часа. Если вы достигли этого лимита, подождите немного и попробуйте снова позже.
        </div>
        <div class="${styles.listItem} ${styles.listItemBig}">
          <img src="${list}" />Недостаточно баллов на балансе: Для завершения покупки необходимо иметь достаточное количество баллов на вашем балансе. Проверьте баланс и убедитесь, что у вас хватает баллов для желаемой покупки.
        </div>
        <div class="${styles.paragraph} ${styles.listItemBig}">Если все вышеперечисленные пункты проверены, но проблема сохраняется, пожалуйста, свяжитесь с нашей службой поддержки для получения дополнительной помощи.</div>
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
            <div className={styles.arrow}>
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