import { NavLink } from 'react-router-dom'
import styles from './Footer.module.scss'
import android from '../../assets/images/social/android.svg'
import gallery from '../../assets/images/social/gallery.svg'
import store from '../../assets/images/social/store.svg'
import ios from '../../assets/images/social/ios.svg'
import tg from '../../assets/images/social/tg.svg'
import inst from '../../assets/images/social/inst.svg'
import youtube from '../../assets/images/social/youtube.svg'

const Footer = () => {
  return (
    <div className={styles.wrapper}>

      <div className={`${styles.container} container-main`}>
        <div className={styles.social}>
          <div className={styles.left}>
            <div>
              <NavLink to='https://parimatch.onelink.me/hyhP/v2fqt0je' target='_blank'>
                <img src={android} alt="" />
              </NavLink>
            </div>
            <div>
              <NavLink to='https://parimatch.onelink.me/hyhP/v2fqt0je' target='_blank'>
                <img src={gallery} alt="" />
              </NavLink>
            </div>
            <div>
              <NavLink to='https://parimatch.onelink.me/hyhP/v2fqt0je' target='_blank'>
                <img src={store} alt="" />
              </NavLink>
            </div>
            <div>
              <NavLink to='https://parimatch.onelink.me/hyhP/v2fqt0je' target='_blank'>
                <img src={ios} alt="" />
              </NavLink>
            </div>
          </div>

          <div className={styles.right}>
            <div>
              <NavLink to="https://t.me/pmkaz" target='_blank'>
                <img src={tg} alt="telegram" />
              </NavLink>
            </div>
            <div>
              <NavLink to="https://www.instagram.com/parimatch_kz/" target='_blank'>
                <img src={inst} alt="instagram" />
              </NavLink>
            </div>
            <div>
              <NavLink to="https://www.youtube.com/@ParimatchKazakhstan/featured" target='_blank'>
                <img src={youtube} alt="youtube" />
              </NavLink>
            </div>
          </div>
        </div>

        <div className={styles.license}>
          Лицензия на осуществление деятельности букмекерской конторы №20019733 от 31.12.2020г. (действительна до 17.07.2028г.) выдана РГУ «Комитет индустрии туризма Министерства культуры и спорта Республики Казахстан»
        </div>
      </div>
    </div>
  )
}

export default Footer