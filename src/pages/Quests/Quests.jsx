import Header from '../../components/Header/Header'
import HeaderMob from '../../components/HeaderMob/HeaderMob'
import styles from './Quests.module.scss'
import Quest from '../../components/Quest/Quest'
import Footer from '../../components/Footer/Footer'
import { useEffect, useState } from 'react'
import Form from '../../components/modals/Form/Form'
import Offer from '../../components/modals/Offer/Offer'
import Bonus from '../../components/modals/Bonus/Bonus'
import arrow from '../../assets/images/icons/arrowup.svg'
import filter from '../../assets/images/icons/filter.svg'
import arrowDown from '../../assets/images/icons/arrow-down.svg'
import BackButton from '../../components/BackButton/BackButton'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import loader from '../../assets/images/icons/loader.svg'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import OfferRules from "../../components/modals/OfferRules/OfferRules"
import OfferRulesAccept from '../../components/modals/OfferRulesAccept/OfferRulesAccept'

const PER_PAGE = 6

const Quests = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(true)
  const [showHelp, setShowHelp] = useState(false)
  const [showOffer, setShowOffer] = useState(false)
  const [showBonus, setShowBonus] = useState(false)
  const [showOfferRules, setShowOfferRules] = useState(false)

  const [showLoader, setShowLoader] = useState(false)

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  const publicOfferAccepted = useSelector(state => state?.auth?.user?.public_offer_accepted)

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
    setShowOfferRules(false)
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

  const handleOfferRulesClick = () => {
    setIsFormOpen(false)
    setShowOfferRules(true)
  }

  const closeForm = () => {
    document.body.style.overflow = 'auto'
    setIsFormOpen(false)
    setShowHelp(false)
    setShowOffer(false)
    setShowBonus(false)
    setShowOfferRules(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const [isStatusOpen, setIsStatusOpen] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState('')

  const toggleStatus = () => {
    setIsStatusOpen(!isStatusOpen)
    setIsFilterOpen(false)
  }

  const selectStatus = (status) => {
    setSelectedStatus(status)
    setIsStatusOpen(false)
    fetchData(1, selectedFilter, status)
  }


  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('')

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
    setIsStatusOpen(false)
  }

  const selectFilter = (filter) => {
    setSelectedFilter(filter)
    setIsFilterOpen(false)
    fetchData(1, filter, selectedStatus)
  }

  const [products, setProducts] = useState([])
  const [pagination, setPagination] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalItemsCount, setTotalItemsCount] = useState(0)
  const [categories, setCategories] = useState(null)

  const fetchData = async (page, category = null, status = null) => {
    try {
      setLoading(true)

      const response = await axios.get(`${process.env.REACT_APP_API_URL}/${isAuthenticated ? 'my_quests' : 'quests'}`,
        {
          params: {
            page: page,
            per_page: PER_PAGE,
            quest_category: category,
            status: status,
            cacheBuster: Math.random()
          },
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
      if (response.data) {
        if (page === 1) {
          setProducts(response.data.data)
          setCategories(response.data.meta.categories)
        } else {
          setProducts(prevProducts => [...prevProducts, ...response.data.data]);
        }
        setPagination(response.data.pagination);
        setTotalItemsCount(response.data.pagination.total_count)
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData(1, selectedFilter, selectedStatus)
  }, [isAuthenticated]);

  const displayedItemsCount = currentPage * PER_PAGE

  const additionalItemsCount = totalItemsCount - displayedItemsCount

  const next = () => {
    if (pagination && pagination.next_page) {
      setCurrentPage(currentPage + 1)
      fetchData(pagination.next_page);
    }
  }

  const [loading, setLoading] = useState(false)

  const setLoader = () => {
    setShowLoader(true)
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 500);

    return () => clearTimeout(timer);
  }

  useEffect(() => {
    setLoader()
  }, [selectedFilter, selectedStatus])

  return (
    <div>
      <Header onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick} />
      <HeaderMob onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick} />
      <div className={`${styles.container} container-main`}>
        <BackButton />
        <div className={styles.title}>
          {t('quests')}

          <div className={styles.filters}>
            {
              isAuthenticated &&
              <div className={`${styles.filter} ${styles.filterPurple}`}
                onClick={toggleStatus}>
                Статус
                <img src={arrowDown} alt="" />

                {isStatusOpen &&
                  <div className={styles.filterWrapper}>
                    <div className={`${styles.filterItem} ${selectedStatus === 'no_progress' || selectedStatus === '' ? styles.selectedFilter : ''}`}
                      onClick={() => selectStatus('no_progress')}>
                      {t('new')}
                    </div>
                    <div className={`${styles.filterItem} ${selectedStatus === 'in_progress' ? styles.selectedFilter : ''}`}
                      onClick={() => selectStatus('in_progress')}>
                      {t('active')}
                    </div>
                    <div className={`${styles.filterItem} ${selectedStatus === 'completed' ? styles.selectedFilter : ''}`}
                      onClick={() => selectStatus('completed')}>
                      {t('ended')}
                    </div>
                    <div className={`${styles.filterItem} ${selectedStatus === 'reward_received' ? styles.selectedFilter : ''}`}
                      onClick={() => selectStatus('reward_received')}>
                      {t('reward_received')}
                    </div>
                  </div>}
              </div>
            }
            <div className={styles.filter}
              onClick={toggleFilter}>
              {t('quest_filter')}
              <img src={filter} alt="" />

              {isFilterOpen &&
                <div className={styles.filterWrapper}>
                  <div className={`${styles.filterItem} ${selectedFilter === '' ? styles.selectedFilter : ''}`}
                    onClick={() => selectFilter('')}>
                    Все
                  </div>
                  {
                    categories?.map((category, index) => (
                      <div key={index} className={`${styles.filterItem} ${selectedFilter === category ? styles.selectedFilter : ''}`}
                        onClick={() => selectFilter(category)}>
                        {category}
                      </div>
                    ))
                  }
                </div>}
            </div>
          </div>
        </div>

        <div className={styles.wrapper}>
          {
            showLoader ?
              <div className={styles.loaderContainer}>
                <div>
                  {t('loading')}
                  <div className={styles.loaderWrapper}>
                    <div className={styles.loader}>

                    </div>
                  </div>
                </div>
              </div> :
              products.length ?
                products.map((quest) => (
                  <Quest key={quest.id}
                    quest={quest}
                    onLoginClick={handleLoginClick} />
                )) :
                <div className={styles.empty}>
                  <div>
                    {t('nothing_here')}
                  </div>
                  <div className={styles.emptyInfo} dangerouslySetInnerHTML={{ __html: t('try_another_filters') }}>

                  </div>
                </div>
          }
        </div>
        <div className={styles.more}>
          {
            !showLoader && additionalItemsCount > 0 &&
            <div onClick={next}
              className={styles.btn}>
              <button disabled={loading}>
                {loading ? <img className={styles.loader} src={loader} alt="" /> : t('more')}
              </button>
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
                          onBonusClick={handleBonusClick}
                          showOfferRules={showOfferRules}
                          onOfferRulesClick={handleOfferRulesClick}/>
                          : showOffer ? <Offer closeForm={closeForm}
                                               onRegisterClick={handleRegisterClick} />
                          : showBonus ? <Bonus closeForm={closeForm}
                                               onRegisterClick={handleRegisterClick} />
                          : showOfferRules ? <OfferRules closeForm={closeForm}
                                                         onRegisterClick={handleRegisterClick}/> : ''}
      {isAuthenticated && !publicOfferAccepted
      ? <OfferRulesAccept />
      : ''}
    </div>
  )
}

export default Quests