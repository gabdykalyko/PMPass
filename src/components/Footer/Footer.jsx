import { NavLink } from 'react-router-dom'
import styles from './Footer.module.scss'
import android from '../../assets/images/android.svg'
import gallery from '../../assets/images/gallery.svg'
import store from '../../assets/images/store.svg'
import ios from '../../assets/images/ios.svg'
import tg from '../../assets/images/tg.svg'
import inst from '../../assets/images/inst.svg'
import youtube from '../../assets/images/youtube.svg'

const Footer = () => {
  return (
    <div className={styles.wrapper}>

      <div className={styles.container}>
        <div className={styles.social}>
          <div className={styles.left}>
            <div>
              <NavLink>
                <img src={android} alt="" />
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img src={gallery} alt="" />
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img src={store} alt="" />
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img src={ios} alt="" />
              </NavLink>
            </div>
          </div>

          <div className={styles.right}>
            <div>
              <NavLink>
                <img src={tg} alt="" />
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img src={inst} alt="" />
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img src={youtube} alt="" />
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