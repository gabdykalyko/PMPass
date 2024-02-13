import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Prizes from '../../components/Prizes/Prizes';
import Quests from '../../components/Quests/Quests';
import Rules from '../../components/Rules/Rules';
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Rules />
      <Prizes />
      <Quests />
      <Footer />
    </div>
  )
}

export default Home;