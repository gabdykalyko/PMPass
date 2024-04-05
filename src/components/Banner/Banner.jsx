import styles from './Banner.module.scss'
import steam from '../../assets/images/social/steam.svg'
import dota from '../../assets/images/social/dota.svg'
import Button from '../Button/Button'
import { useEffect, useState } from 'react'
import banner from '../../assets/images/banner.png'
import bannerMob from '../../assets/images/banner-mob.png'
import { useTranslation } from 'react-i18next'

const Banner = ({ onRegisterClick }) => {
  const { t } = useTranslation('banner')

  const [isMobile, setIsMobile] = useState(window.innerWidth < 850)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 850);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={`${styles.container} container-main`}>
          <div className={styles.title}>
            {t('title')}
          </div>
          <div className={styles.subtitle}>
            {t('subtitle')}
          </div>
          <div onClick={onRegisterClick}>
            <Button title={t('btn')} />
          </div>
          <div className={styles.platforms}>
            <div>
              <img src={steam} alt="" />
            </div>
            <div>
              <img src={dota} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.banner}>
            <img src={bannerMob} alt="" />
      </div>

      <div className={styles.bannerDesk}>
      </div>
    </div>
  )
}

export default Banner