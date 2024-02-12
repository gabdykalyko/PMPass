import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';
import Prizes from '../../components/Prizes/Prizes';
import Rules from '../../components/Rules/Rules';
import styles from './Home.module.scss'

const Home = () => {
    return(
        <div>
            <Header />
            <Banner />
            <Rules />
            <Prizes />
        </div>
    )
}

export default Home;