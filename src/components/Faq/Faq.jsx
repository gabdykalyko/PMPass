import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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

  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          const id = element.key
          console.log(hash.slice(-1))
          setOpenItems(prevState => ({
            ...prevState,
            [hash.slice(-1)]: true
          }))
        }
      }, 5)
    }
  }, [hash])

  const faqData = [
    {
      id: 1,
      question: t('question1'),
      answer: `<div class="${styles.paragraph}">${t('answer1_text1')}</div>
      <div class="${styles.paragraph}">${t('answer1_text2')}</div>
      <div class="${styles.paragraph}">${t('answer1_text3')}</div>
      <div class="${styles.paragraph}">${t('answer1_text4')}</div>
      <div class="${styles.paragraph}">${t('answer1_text5')}</div>
      `,
      anchor: "question1"
    },
    {
      id: 2,
      question: t('question2'),
      answer: t('answer2'),
      anchor: "question2"
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
      `,
      anchor: "question3"
    },
    {
      id: 4,
      question: t('question3'),
      answer: `<div class="${styles.paragraph}">${t('answer3_text1')}</div>
      ${t('answer3_text2')}
      `,
      anchor: "question4"
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
      `,
      anchor: "question5"
    },
    {
      id: 6,
      question: t('question5'),
      answer: t('answer5'),
      anchor: "question6"
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
        <div class="${styles.listItem} ${styles.listItemBig}">
          <img src="${list}" />Проверьте, не наложен ли на ваш аккаунт трейд-бан в Steam. -> <a target="_blank" class="${styles.link}" href="https://help.steampowered.com/ru/faqs/view/451E-96B3-D194-50FC">Перейти</a>
        </div>
        <div class="${styles.paragraph} ${styles.listItemBig}">Если все вышеперечисленные пункты проверены, но проблема сохраняется, пожалуйста, свяжитесь с нашей службой поддержки для получения дополнительной помощи.</div>
      `,
      anchor: "question7"

    },
    {
      id: 8,
      question: 'Проблема с трейд ссылкой',
      answer: `<div class="${styles.paragraph}">Это может быть связано с одной из следующих причин:</div>
        <div class="${styles.listItem} ${styles.listItemBig}">
          <img src="${list}" />Нет трейд ссылки в профиле
        </div>
        <div class="${styles.listItem} ${styles.listItemBig}">
          <img src="${list}" />Трейд ссылка в PM Pass не совпадает с трейд ссылкой в Steam
        </div>
        <div class="${styles.listItem} ${styles.listItemBig}">
          <img src="${list}" />Произошел трейд-лок из-за удаления/добавления аутентификатора Steam. Узнать почему -> <a target="_blank" class="${styles.link}" href="https://help.steampowered.com/ru/faqs/view/7EFD-3CAE-64D3-1C31">Перейти</a>
        </div>
        <div class="${styles.paragraph} ${styles.listItemBig}">Если все вышеперечисленные пункты проверены, но проблема сохраняется, пожалуйста, свяжитесь с нашей службой поддержки для получения дополнительной помощи.</div>
      `,
      anchor: "question8"
    },
    {
      id: 9,
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
      `,
      anchor: "question9"
    }
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
        <div key={item.id} id={item.anchor} className={styles.item}>
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