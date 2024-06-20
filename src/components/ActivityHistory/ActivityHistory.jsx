import styles from './ActivityHistory.module.scss'
import check from '../../assets/images/icons/check-green.svg'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Pagination from './Pagination/Pagination'
import info from '../../assets/images/info.svg'
import carret from '../../assets/images/carret.svg'

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

  const errors = {
    bad_params: 'Не удалось купить предмет по техническим причинам. Пожалуйста, обратитесь в службу поддержки для получения информации.',
    failed: 'Не удалось купить предмет по техническим причинам. Пожалуйста, обратитесь в службу поддержки для получения информации.',
    bad_buyer: `Не удалось купить предмет из-за проблем с аккаунтом Steam (например, приватный инвентарь, трейд-лок из-за аутентификатора, слишком много отказов). Пожалуйста, проверьте настройки вашего Steam и обратитесь к <a class="${styles.link}" href='/#question3'>FAQ</a>  для получения информации.`,
    tradelink_outdated_error: `Ошибка трейд ссылки. Возможно, трейд ссылка неверна или произошел трейд-лок после отключения аутентификатора. Пожалуйста, проверьте свою трейд ссылку и обратитесь к <a class="${styles.link}" href='/#question8'>FAQ</a> для получения информации`,
    tradelink_format_error: 'Ошибка с трейд ссылкой. Пожалуйста, убедитесь, что ваша трейд ссылка корректна.',
    escrow_restriction_error: 'Ошибка связана с трейд-локом из-за перепривязки аутентификатора. Пожалуйста, проверьте свои настройки Steam и обратитесь к FAQ для получения информации.',
    private_inventory_error: `У вас скрыт инвентарь в Steam. Пожалуйста, сделайте его видимым и обратитесь к <a class="${styles.link}" href='/#question3'>FAQ</a> для получения информации.`,
    steam_trade_ban_error: `У вас трейд-бан в Steam. Пожалуйста, проверьте ваш аккаунт и обратитесь к <a class="${styles.link}" href='/#question3'>FAQ</a> для получения информации.`,
    tradelink_error: `Произошла ошибка с трейд ссылкой, которую мы не смогли квалифицировать. Перейдите к <a class="${styles.link}" href='/#question3'>FAQ</a> для получения информации о возможных проблемах с трейд ссылкой.`,
    buyer_has_buy_items_ban: 'Вам заблокировали возможность покупать предметы на торговой площадке за 7 отмен предложений обмена за 1 час. Блокировка на 12 часов.',
    cancelled: 'Вы не приняли или отклонили последнее предложение обмена. Пожалуйста, не отклоняйте предложения.',
    offer_expired: 'Вы не приняли последнее предложение обмена.',
    offer_declined: 'Вы отклонили последнее предложение обмена. ',
    default: 'Не удалось купить предмет по техническим причинам. Пожалуйста, обратитесь в службу поддержки для получения информации.'
  }

  const [visibleItem, setIsVisible] = useState(null)

    const handleShowInfo = (id) => {
      setIsVisible(id)
    } 

    const handleCloseInfo = (id) => {
      setIsVisible(null)
    }

  const renderStatus = (product) => {
    let statusText;
    let statusStyle;

    if (product.status === "pending" || product.status === 'sent') {
      statusText = 'Отправлен'
      statusStyle = styles.send
    }
    else if (product.status === 'completed') {
      statusText = 'Доставлен'
    } else {
      statusText = 'Отмена'
      statusStyle = styles.failed
    }

    return (
      <div className={styles.status}>
        <div className={statusStyle}>
          {statusText}
          {
          product.status === 'failed' &&
          <div className={styles.error}>
            <img onClick={() => handleShowInfo(product.id)} src={info} alt="" />

            <div className={styles.info} style={{ display: visibleItem === product.id ? 'block' : 'none' }}>
              <div className={styles.infoTitle}>
                Причина отмены
              </div>
              <div dangerouslySetInnerHTML={{ __html: errors[product.giveaway.last_attempt_status] ?
                  errors[product.giveaway.last_attempt_status] :
                  errors.default }} className={styles.infoTxt}>
              </div>
              <div onClick={handleCloseInfo} className={styles.accept}>
                Понятно
              </div>

              <div className={styles.carret}>
                <img src={carret} alt="" />
              </div>
            </div>
          </div>
        }
        </div>
      </div>
    );
  };

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
            products.map((product, index) => (
              <div key={index}
                   className={styles.bodyItem}>
                <div className={styles.bodyItemName}>
                  { product?.shop_item?.name }
                </div>
                <div className={styles.bodyItemName}>
                  {-product.amount} points
                </div>
                {renderStatus(product)}
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