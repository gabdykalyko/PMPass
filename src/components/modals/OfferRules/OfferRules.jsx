import { useState } from 'react'
import styles from './OfferRules.module.scss'
import close from '../../../assets/images/icons/close-btn.svg'
import Button from '../../Button/Button'
import { useTranslation } from 'react-i18next'

const OfferRules = ({ closeForm, onRegisterClick }) => {
  const { t } = useTranslation(['offer'])
  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      console.log('hello')
      closeForm()
    }
  }

  return (
    <div className={styles.wrapper} onClick={handleOutsideClick}>
      <div className={styles.container}>
        <div className={styles.closeBtn} onClick={onRegisterClick}>
          <img src={close} alt="" />
        </div>
        <div className={styles.title}>
          {t('offer_header')}
        </div>
        <div className={styles.offer}>
          <p>{t('p1')}</p>
          <p>{t('p2')}</p>
          <p><strong>{t('p3')}</strong></p>
          <p><strong>{t('akciya')} - </strong>{t('p4')}</p>
          <p><strong>{t('organizator')} - </strong>{t('p5')}</p>
          <p><strong>{t('member')} – </strong>{t('p6')}</p>
          <p><strong>{t('login_offer')} – </strong>{t('p7')}</p>
          <p><strong>{t('mobile_app')} – </strong>{t('p8')}</p>
          <p><strong>{t('prize_offer')} – </strong>{t('p9')}</p>
          <p><strong>{t('quest_offer')} – </strong>{t('p10')}</p>
          <p><strong>{t('rules_offer')} – </strong>{t('p11')}</p>
          <p><strong>{t('location_offer')} – </strong>{t('p12')}</p>
          <p><strong>{t('deadline_offer')} – </strong>{t('p13')}</p>
          <p><strong>{t('territoy_offer')} – </strong>{t('p14')}</p>
          <p><strong>{t('promo_site')} – </strong><a href="https://pm-pass.kz/">https://pm-pass.kz/</a></p>
          <p><strong>{t('verify_offer')} – </strong>{t('p15')}</p>
          <p><strong>{t('web_site')} – </strong><a href="https://parimatch.kz/">https://parimatch.kz/</a></p>
          <p><strong>{t('main_rules')} – </strong>{t('p16')}</p>
          <p><strong>{t('pm_points')} – </strong>{t('p17')}</p>
          <p><strong>{t('freebet_offer')} – </strong>{t('p18')}</p>

          <p><strong>{t('main_terms')}</strong></p>
          <p><strong>1.1. </strong>{t('p19')}</p>
          <p><strong>1.2. </strong>{t('p20')}</p>
          <p><strong>1.3. </strong>{t('p21')}</p>
          <p><strong>1.4. </strong>{t('p22')}</p>
          <p><strong>1.5. </strong>{t('p23')}</p>
          <p><strong>1.6. </strong>{t('p24')}</p>
          <p><strong>1.7. </strong>{t('p25')}</p>

          <p><strong>{t('main_terms_2')}</strong></p>
          <p><strong>2.1. </strong>{t('p26')}</p>
          <p><strong>2.1.1. </strong>{t('p27')}</p>
          <p><strong>2.1.2. </strong>{t('p28')}</p>
          <p><strong>2.1.3. </strong>{t('p29')}</p>
          <p><strong>2.2. </strong>{t('p30')}</p>
          <p><strong>2.3. </strong>{t('p31')}</p>
          <p><strong>2.4. </strong>{t('p32')}</p>
          <p><strong>2.5. </strong>{t('p33')}</p>

          <p><strong>{t('main_terms_3')}</strong></p>
          <p><strong>3.1. </strong>{t('p34')}</p>
          <p><strong>3.2. </strong>{t('p35')}</p>
          <p><strong>3.3. </strong>{t('p36')}</p>
          <p><strong>3.4. </strong>{t('p37')}</p>

          <p><strong>{t('main_terms_4')}</strong></p>
          <p><strong>4.1. </strong>{t('p38')}</p>
          <p><strong>4.2. </strong>{t('p39')}</p>
          <p><strong>4.3. </strong>{t('p40')}</p>
          <p><strong>4.4. </strong>{t('p41')}</p>
          <p><strong>4.5. </strong>{t('p42')}</p>
          <p><strong>4.6. </strong>{t('p43')}</p>
          <p><strong>4.7. </strong>{t('p44')}</p>
          <p><strong>4.8. </strong>{t('p45')}</p>
          <p><strong>4.9. </strong>{t('p46')}</p>
        </div>
        <div className={styles.btn} onClick={onRegisterClick}>
          <Button title='Ок'/>
        </div>
      </div>
    </div>
  )
}

export default OfferRules