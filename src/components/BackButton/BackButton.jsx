import styles from './BackButton.module.scss'
import arrowback from '../../assets/images/icons/arrowback.svg'
import { useNavigate  } from 'react-router-dom'

const BackButton = () => {
  const navigate = useNavigate ()

  const handleGoBack = () => {
    navigate(-1)
  };

  return (
    <div className={styles.wrapper}
         onClick={handleGoBack}>
      <img src={arrowback} alt="" />
      Назад
    </div>
  )
}

export default BackButton