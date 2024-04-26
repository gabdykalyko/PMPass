import { useState } from 'react';
import styles from './Faq.module.scss'
import arrowup from '../../assets/images/icons/arrowup.svg'
import arrowdown from '../../assets/images/icons/arrowdown.svg'
import list from '../../assets/images/icons/list.svg'
import { useTranslation } from 'react-i18next'
import whatsapp from '../../assets/images/social/whatsapp.svg'
import telegram from '../../assets/images/social/telegram.svg'
import phone from '../../assets/images/social/phone.svg'

const Faq = () => {
  const [openItems, setOpenItems] = useState({});

  const { t } = useTranslation(['faq'])

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
      question: 'Поддержка',
      answer: `<div class="${styles.paragraph}">Если у вас возникли проблемы обратитесь в поддержку 24/7</div>
      <div class="${styles.help}">
        <a href='https://wa.me/+77712229992' target='_blank'>
          <img src=${whatsapp} alt="" />
        </a>
        <a href='https://t.me/PMKzSupport_bot' target='_blank'>
          <img src=${telegram} alt="" />
        </a>
        <a href='tel:9933' target='_blank'>
          <img src=${phone} alt="" />
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