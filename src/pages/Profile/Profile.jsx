import Account from '../../components/Account/Account'
import Header from '../../components/Header/Header'
import HeaderMob from '../../components/HeaderMob/HeaderMob'
import styles from './Profile.module.scss'

const Profile = () => {
  return (
    <div>
      <Header />
      <HeaderMob />
      <Account />
    </div>
  )
}

export default Profile