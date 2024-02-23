import { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Rules.module.scss'
import defaultImg from '../../assets/images/default.jpg'
import Rule from '../Rule/Rule'
import nextArrow from '../../assets/images/nextarrow.svg'
import prevArrowImg from '../../assets/images/prevarrow.svg'

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
  let sliderRef = useRef();

  const NextArrow = () => {
    return (
      <div className={styles.nextArrow} onClick={() => sliderRef.current.slickNext()}>
        <img src={nextArrow} alt="" />
      </div>
    )
  }

  const PrevArrow = () => {
    return (
      <div className={styles.prevArrow} onClick={() => sliderRef.current.slickPrev()}>
        <img src={prevArrowImg} alt="" />
      </div>
    )
  }

  const settings = {
    responsive: [
      {
        breakpoint: 10000,
        settings: 'unslick'
      },
      {
        breakpoint: 850,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          prevArrow: <PrevArrow />,
          nextArrow: <NextArrow />
        }
      }
    ]
  };

  return (
    <div className={`${styles.container} container-main`}>
      <div className={styles.title}>
        Правила Aкции
      </div>
      <div className={styles.sliderWrapper}>
        <Slider {...settings}
          className={styles.rules}
          ref={sliderRef}>
          {
            rules.map((rule, index) => (
              <Rule key={index}
                src={rule.src}
                title={rule.title}
                txt={rule.txt} />
            ))
          }
        </Slider>
      </div>
    </div>
  )
}

export default Rules