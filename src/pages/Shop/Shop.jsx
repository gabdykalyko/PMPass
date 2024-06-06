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
import axios from 'axios'
import BackButton from '../../components/BackButton/BackButton'
import { useTranslation } from 'react-i18next'
import arrowFilter from '../../assets/images/icons/arrow_filter.svg'
import close from '../../assets/images/icons/close-small.svg'
import closeWhite from '../../assets/images/icons/close-white.svg'
import filter from '../../assets/images/icons/filter.svg'
import Filter from './Filter/Filter'

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

  const [selectedGames, setSelectedGames] = useState([]);
  const [selectedRarity, setSelectedRarity] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

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

  const gameNames = {
    dota2: 'Dota 2',
    csgo: 'CS 2'
  };

  const rarityNames = {
    common: 'Обычный',
    rare: 'Редкий',
    epic: 'Эпический',
    legendary: 'Легендарный'
  }

  const orderedGames = ['dota2', 'csgo'];
  const orderedRarities = ['common', 'rare', 'epic', 'legendary']

  const fetchData = async (page, order = 'asc', games = selectedGames, rarities = selectedRarity) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/shop_items`, {
        params: {
          per_page: PER_PAGE,
          page: page,
          order: order,
          game: games,
          rarity: rarities
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

  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('По возрастанию')

  useEffect(() => {
    fetchData(1, selectedFilter === 'По возрастанию' ? 'asc' : 'desc')
  }, [selectedFilter, selectedGames, selectedRarity]);

  const next = () => {
    if (pagination && pagination.next_page) {
      setCurrentPage(currentPage + 1)
      fetchData(pagination.next_page, selectedFilter === 'По возрастанию' ? 'asc' : 'desc')
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

  const selectFilter = (filter) => {
    setSelectedFilter(filter)
    setIsFilterOpen(false)
    setCurrentPage(1)
    fetchData(1, filter === 'По возрастанию' ? 'asc' : 'desc', selectedGames, selectedRarity)
  }

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  }

  const selectGameChip = (game) => {
    setCurrentPage(1)
    setSelectedGames(prevSelected => {
      const newSelected = prevSelected.includes(game)
        ? prevSelected.filter(item => item !== game)
        : [...prevSelected, game];

      // Обновляем данные с новыми фильтрами
      fetchData(1, selectedFilter === 'По возрастанию' ? 'asc' : 'desc', newSelected, selectedRarity);
      return newSelected;
    });
  };

  const selectRarityChip = (rarity) => {
    setCurrentPage(1)
    setSelectedRarity(prevSelected => {
      const newSelected = prevSelected.includes(rarity)
        ? prevSelected.filter(item => item !== rarity)
        : [...prevSelected, rarity];

      // Обновляем данные с новыми фильтрами
      fetchData(1, selectedFilter === 'По возрастанию' ? 'asc' : 'desc', selectedGames, newSelected);
      return newSelected;
    });
  };

  const resetFilters = () => {
    setSelectedGames([])
    setSelectedRarity([])
    setCurrentPage(1)
    setSelectedFilter('По возрастанию')
    fetchData(1, 'asc', [], []);
  }

  const [gamesOpen, setGamesOpen] = useState(false)

  const openGames = () => {
    setGamesOpen(!gamesOpen)
  }

  return (
    <div>
      <Header onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick} />
      <HeaderMob onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick} />
      <div className={`${styles.container} container-main`}>
        <BackButton />
        <div>
          <div className={styles.container__title}>
            <div className={styles.title}>
              {t('shop')}
            </div>
          </div>
          <div className={styles.container__filter}>
            <div className={styles.chips}>
              <div className={styles.chips__container}>
                {orderedGames.map(game => (
                  <div
                    key={game}
                    className={`${styles.chips__container_item} ${selectedGames.includes(game) ? styles.selected_chips__container_item : ''}`}
                    onClick={() => selectGameChip(game)}
                  >
                    {gameNames[game]}

                    <img src={close} alt="" />
                  </div>
                ))}
              </div>
              <div className={styles.chips__container_divider}>
                |
              </div>
              <div className={styles.chips__container}>
                {orderedRarities.map(rarity => (
                  <div
                    key={rarity}
                    className={`${styles.chips__container_item} ${selectedRarity.includes(rarity) ? styles.selected_chips__container_item : ''}`}
                    onClick={() => selectRarityChip(rarity)}
                  >
                    {rarityNames[rarity]}

                    <img src={close} alt="" />
                  </div>
                ))}
              </div>

              <div onClick={resetFilters} className={styles.reset_filter}>
                {t('reset_filters')}

                <img src={closeWhite} alt="" />
              </div>
            </div>

            <div className={styles.filter}
              onClick={toggleFilter}>
              {t('product_filter')}
              <img src={arrowFilter} alt="" />

              {isFilterOpen &&
                <div className={styles.filterWrapper}>
                  <div className={`${styles.filterItem} ${selectedFilter === 'По возрастанию' ? styles.selectedFilter : ''}`}
                    onClick={() => selectFilter('По возрастанию')}>
                    По возрастанию
                  </div>
                  <div className={`${styles.filterItem} ${selectedFilter === 'По убыванию' ? styles.selectedFilter : ''}`}
                    onClick={() => selectFilter('По убыванию')}>
                    По убыванию
                  </div>
                </div>}
            </div>

            <div className={`${styles.filter} ${styles.filterModal}`}
                 onClick={openGames}>
              Фильтр
              <img src={filter} alt="" />
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
                products.map((quest, index) => (
                  <Product key={quest.id}
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
            <div onClick={next}>
              <Button title={t('more')}
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
      <Filter filterOpen={gamesOpen}
              selectFilter={selectFilter}
              selectedFilter={selectedFilter}
              orderedGames={orderedGames}
              selectedGames={selectedGames}
              selectGameChip={selectGameChip}
              gameNames={gameNames}
              orderedRarities={orderedRarities}
              selectedRarity={selectedRarity}
              selectRarityChip={selectRarityChip}
              rarityNames={rarityNames}
              resetFilters={resetFilters}
              openGames={openGames}/>
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

export default Shop;