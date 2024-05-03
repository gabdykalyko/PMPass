import styles from './Shop.module.scss'
import Header from "../../components/Header/Header"
import HeaderMob from '../../components/HeaderMob/HeaderMob'
import Product from "../../components/Product/Product"
import Footer from "../../components/Footer/Footer"
import Form from '../../components/modals/Form/Form'
import { useEffect, useState } from 'react'
import Offer from '../../components/modals/Offer/Offer'
import Bonus from '../../components/modals/Bonus/Bonus'
import Button from '../../components/Button/Button'
import arrow from '../../assets/images/icons/arrowup.svg'
import filter from '../../assets/images/icons/filter.svg'
import axios from 'axios'
import BackButton from '../../components/BackButton/BackButton'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

const PER_PAGE = 8

const Shop = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(true)
  const [showHelp, setShowHelp] = useState(false)
  const [showOffer, setShowOffer] = useState(false)
  const [showBonus, setShowBonus] = useState(false)

  const [showLoader, setShowLoader] = useState(false)

  const [pagination, setPagination] = useState(null)

  const [currentPage, setCurrentPage] = useState(1)

  const [totalItemsCount, setTotalItemsCount] = useState(0)

  const { t } = useTranslation('main')

  const handleLoginClick = () => {
    document.body.style.overflow = 'hidden'
    setIsFormOpen(true)
    setShowLogin(true)
    setShowHelp(false)
  }

  const handleRegisterClick = () => {
    document.body.style.overflow = 'hidden'
    setIsFormOpen(true)
    setShowLogin(false)
    setShowOffer(false)
    setShowBonus(false)
  }

  const handleHelpClick = () => {
    setShowHelp(true)
  }

  const handleOfferClick = () => {
    setIsFormOpen(false)
    setShowOffer(true)
  }

  const handleBonusClick = () => {
    setIsFormOpen(false)
    setShowBonus(true)
  }

  const closeForm = () => {
    document.body.style.overflow = 'auto'
    setIsFormOpen(false)
    setShowHelp(false)
    setShowOffer(false)
    setShowBonus(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const [products, setProducts] = useState([])

  const fetchData = async (page) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/shop_items`, {
        params: {
          per_page: PER_PAGE,
          page: page
        },
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      if (response.data) {
        if (page === 1) {
          setProducts(response.data.data);
        } else {
          setProducts(prevProducts => [...prevProducts, ...response.data.data]);
        }
        setPagination(response.data.pagination);
        setTotalItemsCount(response.data.pagination.total_count)
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData(1);
  }, []);

  const next = () => {
    if (pagination && pagination.next_page) {
      setCurrentPage(currentPage + 1)
      fetchData(pagination.next_page);
    }
  }

  const displayedItemsCount = currentPage * PER_PAGE

  const additionalItemsCount = totalItemsCount - displayedItemsCount

  const setLoader = () => {
    setShowLoader(true)
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 500);

    return () => clearTimeout(timer);
  }

  useEffect(() => {
    setLoader()
  }, [])

  return (
    <div>
      <Header onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick} />
      <HeaderMob onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick} />
      <div className={`${styles.container} container-main`}>
        <BackButton />
        <div className={styles.title}>
          <div>
            {t('shop')}
          </div>

          <div className={styles.filter}>
            {t('product_filter')}
            <img src={filter} alt="" />
          </div>
        </div>
        <div className={styles.wrapper}>
          {
            showLoader ?
              <div className={styles.loaderContainer}>
                <div>
                  Загрузка Страницы...
                  <div className={styles.loaderWrapper}>
                    <div className={styles.loader}>

                    </div>
                  </div>
                </div>
              </div> :
              products.length ?
                products.map((quest, index) => (
                  <Product key={quest.id}
                    quest={quest}
                    onLoginClick={handleLoginClick} />
                )) :
                <div className={styles.empty}>
                   <div>
                    Здесь пока ничего нет
                  </div>
                  <div className={styles.emptyInfo}>
                    Попробуйте другие настройки фильтра или заходите в PM Hero на сайте <NavLink className={styles.link} to={'https://parimatch.kz/'} target='_blank'>parimatch.kz</NavLink>
                  </div>
                </div>
          }
        </div>
        <div className={styles.more}>
          {
             !showLoader && additionalItemsCount > 0 &&
            <div onClick={next}>
              <Button title='Больше'
                color='brown' />
            </div>
          }

          {
            !showLoader && products.length ?
              <div onClick={scrollToTop}
                className={styles.up}>
                <img src={arrow} alt="" />
              </div>
              : ''
          }
        </div>
      </div>
      <Footer />
      {isFormOpen ? <Form showLogin={showLogin}
                          closeForm={closeForm}
                          onLoginClick={handleLoginClick}
                          onRegisterClick={handleRegisterClick}
                          onHelpClick={handleHelpClick}
                          showHelp={showHelp}
                          onOfferClick={handleOfferClick}
                          onBonusClick={handleBonusClick} />
                        : showOffer ? <Offer closeForm={closeForm}
          onRegisterClick={handleRegisterClick} />
          : showBonus ? <Bonus closeForm={closeForm}
            onRegisterClick={handleRegisterClick} /> : ''}
    </div>
  )
}

export default Shop