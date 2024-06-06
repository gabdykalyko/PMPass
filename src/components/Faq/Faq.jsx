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
      question: 'Почему я не могу совершить покупку в магазине?',
      answer: `<div class="${styles.paragraph}">Это может быть связано с одной из следующих причин:</div>
        <div class="${styles.listItem} ${styles.listItemBig}">
          <img src="${list}" />Нет трейд ссылки в профиле: Убедитесь, что у вас указана актуальная трейд ссылка.
        </div>
        <div class="${styles.listItem} ${styles.listItemBig}">
          <img src="${list}" />Закрыт инвентарь в Steam: Откройте инвентарь в настройках приватности Steam.
        </div>
        <div class="${styles.listItem} ${styles.listItemBig}">
          <img src="${list}" />Превысил лимит покупок в час: Подождите и попробуйте снова позже.
        </div>
        <div class="${styles.listItem} ${styles.listItemBig}">
          <img src="${list}" />Недостаточно PM-Баллов на балансе: Проверьте, хватает ли у вас баллов для покупки.
        </div>
        <div class="${styles.paragraph} ${styles.listItemBig}">Если все вышеперечисленные пункты проверены, но проблема сохраняется, пожалуйста, свяжитесь с нашей службой поддержки для получения дополнительной помощи.</div>
      `

    },
    {
      id: 8,
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