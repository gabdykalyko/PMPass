import styles from './Banner.module.scss'
import steam from '../../assets/images/social/steam.svg'
import dota from '../../assets/images/social/dota.svg'
import Button from '../Button/Button'
import { useEffect, useState } from 'react'
import banner from '../../assets/images/banner.png'
import bannerMob from '../../assets/images/banner-mob.png'

const Banner = () => {
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
    <div className={styles.wrapper}
         style={isMobile ? { backgroundImage: 'none' } : { backgroundImage: banner }}>

      <div className={`${styles.container} container-main`}>
        <div className={styles.title}>
          Farmea Los Regalos
        </div>
        <div className={styles.subtitle}>
          Подключите Париматч к Steam и начните!
        </div>
        <div>
          <Button title="Присоединиться"/>
        </div>
        <div className={styles.platforms}>
          <div>
            <img src={steam} alt="" />
          </div>
          <div>
            <img src={dota} alt="" />
          </div>
        </div>
        <div className={styles.banner}>
          <img src={bannerMob} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Banner