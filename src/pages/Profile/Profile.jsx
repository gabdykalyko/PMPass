import Account from '../../components/Account/Account'
import Header from '../../components/Header/Header'
import HeaderMob from '../../components/HeaderMob/HeaderMob'
import styles from './Profile.module.scss'
import Footer from '../../components/Footer/Footer'

const Profile = () => {
  return (
    <div>
      <Header />
      <HeaderMob />
      <Account />
      <Footer />
    </div>
  )
}

export default Profile