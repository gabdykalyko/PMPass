import WelcomeHeader from './WelcomeHeader/WelcomeHeader'
import styles from './Welcome.module.scss'
import Intro from './Intro/Intro'
import ShopQuests from './ShopQuests/ShopQuests'
import { useState } from 'react'
import TradeLink from './TradeLink/TradeLink'
import Steam from './Steam/Steam'

const Welcome = () => {
  const currentPage = localStorage.getItem('currentPage')
  const [page, setPage] = useState(currentPage ? parseInt(currentPage) : 1)

  const handleNextPage = () => {
    const newPage = page + 1;
    localStorage.setItem('currentPage', newPage);
    setPage(newPage);
  }

  const handlePreviousPage = () => {
    const newPage = page - 1;
    localStorage.setItem('currentPage', newPage);
    setPage(newPage);
  }

  const setFirstPage = () => {
    localStorage.setItem('currentPage', 1)
    setPage(1)
  }

  return (
    <div>
      <WelcomeHeader />
      {page === 1 && <Intro onClickNext={handleNextPage} />}
      {page === 2 && <ShopQuests onClickPrevious={handlePreviousPage}
                                 onClickNext={handleNextPage}/>}
      {page === 3 && <TradeLink onClickPrevious={handlePreviousPage}
                                onClickNext={handleNextPage}/>}
      {page === 4 && <Steam onClickPrevious={handlePreviousPage}
                                setFirstPage={setFirstPage}/>}
    </div>
  )
}

export default Welcome