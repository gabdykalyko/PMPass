import styles from './BackButton.module.scss'
import arrowback from '../../assets/images/icons/arrowback.svg'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const BackButton = () => {
  const { t } = useTranslation('main')

  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  };

  return (
    <div className={styles.wrapper}
      onClick={handleGoBack}>
      <img src={arrowback} alt="" />
      {t('back')}
    </div>
  )
}

export default BackButton