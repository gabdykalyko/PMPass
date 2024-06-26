import { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Rules.module.scss'
import defaultImg from '../../assets/images/default.jpg'
import Rule from '../Rule/Rule'
import nextArrow from '../../assets/images/icons/nextarrow.svg'
import prevArrowImg from '../../assets/images/icons/prevarrow.svg'
import phone from '../../assets/images/rules/phone.png'
import chest from '../../assets/images/rules/chest.png'
import weapon from '../../assets/images/rules/weapon.png'
import check from '../../assets/images/rules/check.png'
import { useTranslation } from 'react-i18next'

const Rules = () => {
  const { t } = useTranslation('rules')

  const rules = [
    {
      src: phone,
      title: t('connect'),
      txt: t('register')
    },
    {
      src: chest,
      title: t('quests'),
      txt: t('finish')
    },
    {
      src: weapon,
      title: t('chest'),
      txt: t('bonuses')
    },
    {
      src: check,
      title: t('store'),
      txt: t('change')
    },
  ]

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
        {t('title')}
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