import styles from './Shop.module.scss'
import Header from "../../components/Header/Header"
import Product from "../../components/Product/Product"
import Footer from "../../components/Footer/Footer"
import pudge from '../../assets/images/pudge.jpg'

const products = [
  {
    img: pudge,
    name: 'FreeBet 5 S/',
    price: '10000 GG Points'
  },
  {
    img: pudge,
    name: 'FreeBet 5 S/',
    price: 'Free'
  },
  {
    img: pudge,
    name: 'FreeBet 5 S/',
    price: '20000 GG Points'
  },
  {
    img: pudge,
    name: 'FreeBet 5 S/',
    price: '50000 GG Points'
  },
  {
    img: pudge,
    name: 'FreeBet 5 S/',
    price: '10000 GG Points'
  },
  {
    img: pudge,
    name: 'FreeBet 5 S/',
    price: '20000 GG Points'
  },
]

const Shop = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.title}>
          Магазин
        </div>
        <div className={styles.wrapper}>
          {products.map((quest, index) => (
            <Product key={index}
              img={quest.img}
              name={quest.name}
              price={quest.price} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Shop