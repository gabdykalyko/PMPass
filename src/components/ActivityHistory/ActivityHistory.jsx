import styles from './ActivityHistory.module.scss'
import check from '../../assets/images/icons/check-green.svg'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Pagination from './Pagination/Pagination'

const PER_PAGE = 6

const ActivityHistory = () => {
  const [products, setProducts] = useState([])
  const [pagination, setPagination] = useState(null)

  const [currentPage, setCurrentPage] = useState(1)

  const fetchData = async (page) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/my_pm_points_transactions`,
        {
          params: {
            page: page,
            per_page: PER_PAGE,
          },
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
      if (response.data) {
        setProducts(response.data.data)
        setPagination(response.data.pagination);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchData(page);
  }

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  return (
    <div className={`${styles.container} container-main`}>
      <div className={styles.title}>
        <img src={check} alt="" />
        История Покупок
      </div>
      <div className={styles.table}>
        <div className={styles.head}>
          <div className={styles.headItem}>
            Товар
          </div>
          <div className={`${styles.headItem} ${styles.headerCenter}`}>
            Стоимость в баллах
          </div>
          <div className={styles.headItem}>
            Статус
          </div>
        </div>
        <div className={styles.body}>
          {
            products.map((product) => (
              <div className={styles.bodyItem}>
                <div className={styles.bodyItemName}>
                  Название товара
                </div>
                <div className={styles.bodyItemName}>
                  {-product.amount} points
                </div>
                <div className={styles.status}>
                  <div className={`${product.status === 'failed' ? styles.failed : product.status === 'pending' ? styles.send : 'Доставлен'}`}>
                    {product.status === 'failed' ? 'Возврат' : product.status === 'pending' ? 'Отправлен' : 'Доставлен'}
                  </div>
                </div>
              </div>
            ))
          }
          <div className={styles.pagination}>
          {
            pagination && (
              <Pagination currentPage={currentPage}
                totalPages={pagination.total_pages}
                onPageChange={handlePageChange} />
            )
          }
        </div>
        </div>
      </div>
    </div>
  )
}

export default ActivityHistory