import { NavLink } from 'react-router-dom'
import styles from './Footer.module.scss'
import android from '../../assets/images/social/android.svg'
import gallery from '../../assets/images/social/gallery.svg'
import store from '../../assets/images/social/store.svg'
import ios from '../../assets/images/social/ios.svg'

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
            <div className={styles.socialItem}>
              <NavLink to="https://t.me/pmkaz" target='_blank'>
                <svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.49359 18.2835L6.9765 20.2455C8.1091 20.6508 9.37451 20.5081 10.3796 19.8616L22.0631 12.3479C22.3281 12.1775 22.6808 12.2112 22.906 12.4285C23.174 12.6871 23.1655 13.1088 22.8874 13.3572L14.2412 21.0761C13.7484 21.5161 13.787 22.2787 14.3217 22.6704L23.4535 29.3572C25.0993 30.5624 27.4826 29.6335 27.7989 27.6638L30.977 7.86705C31.2009 6.47196 29.7506 5.38143 28.4028 5.9315L1.46184 16.9269C1.18198 17.0412 1 17.3059 1 17.5991C1 17.9044 1.19686 18.1774 1.49359 18.2835Z" fill="white" />
                </svg>
              </NavLink>
            </div>
            <div className={styles.socialItem}>
              <NavLink to="https://www.instagram.com/parimatch_kz/" target='_blank'>
                <svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7657 5.62549C23.9568 5.62549 26.0222 6.43065 27.5817 7.89282C29.141 9.35482 30 11.2915 30 13.3458V20.407C30 22.4615 29.141 24.3981 27.5817 25.8601C26.0224 27.3223 23.9568 28.1275 21.7657 28.1275H14.2343C12.0432 28.1275 9.9776 27.3223 8.41827 25.8601C6.85876 24.3981 6 22.4615 6 20.407V13.3458C6 11.2915 6.85876 9.35482 8.41827 7.89282C9.9776 6.43065 12.0432 5.62549 14.2343 5.62549H21.7657ZM11.6484 16.8765C11.6484 20.1601 14.4977 22.8316 18 22.8316C21.5023 22.8316 24.3516 20.1601 24.3516 16.8765C24.3516 13.5928 21.5023 10.9214 18 10.9214C14.4977 10.9214 11.6484 13.5928 11.6484 16.8765ZM24.5392 11.4046C24.7242 11.4046 24.9056 11.3342 25.0364 11.2117C25.1673 11.0889 25.2424 10.9188 25.2424 10.7454C25.2424 10.5718 25.1673 10.4017 25.0364 10.2791C24.9056 10.1564 24.7242 10.0862 24.5392 10.0862C24.3539 10.0862 24.173 10.1564 24.0423 10.2791C23.911 10.4017 23.8361 10.5718 23.8361 10.7454C23.8361 10.919 23.911 11.0889 24.0423 11.2117C24.173 11.3342 24.3541 11.4046 24.5392 11.4046ZM15 16.8765C15 15.3255 16.3458 14.0637 18 14.0637C19.6543 14.0637 21 15.3255 21 16.8765C21 18.4274 19.6542 19.6892 18 19.6892C16.3458 19.6892 15 18.4274 15 16.8765Z" fill="white" />
                </svg>
              </NavLink>
            </div>
            <div className={styles.socialItem}>
              <NavLink to="https://www.youtube.com/@ParimatchKazakhstan/featured" target='_blank'>
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.76229 27.4719H27.1602C30.3426 27.4719 32.9227 24.9839 32.9227 21.9149V11.9774C32.9227 8.90836 30.3426 6.42041 27.1602 6.42041H5.76229C2.57988 6.42041 0 8.90836 0 11.9774V21.9149C0 24.9839 2.57988 27.4719 5.76229 27.4719ZM13.0859 11.838L22.2602 16.9461L13.0859 22.0543V11.838Z" fill="white" />
                </svg>
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