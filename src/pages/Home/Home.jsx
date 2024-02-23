import Banner from '../../components/Banner/Banner';
import Faq from '../../components/Faq/Faq';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HeaderMob from '../../components/HeaderMob/HeaderMob';
import Prizes from '../../components/Prizes/Prizes';
import Quests from '../../components/Quests/Quests';
import Rules from '../../components/Rules/Rules';

const Home = () => {
  return (
    <div>
      <Header />
      <HeaderMob />
      <Banner />
      <Rules />
      <Prizes />
      <Quests />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home;