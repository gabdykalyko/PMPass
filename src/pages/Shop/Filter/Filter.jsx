import styles from './Filter.module.scss'
import close from '../../../assets/images/icons/close-small.svg'
import closeBtn from '../../../assets/images/icons/close-btn-mob.svg'
import Button from '../../../components/Button/Button'

const Filter = ({ filterOpen,
  selectFilter,
  selectedFilter,
  orderedGames,
  selectedGames,
  selectGameChip,
  gameNames,
  orderedRarities,
  selectedRarity,
  selectRarityChip,
  rarityNames,
  resetFilters,
  openGames }) => {
  return (
    <div>
      {
        filterOpen ?
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <div className={styles.title}>
                Фильтры
              </div>

              <div className={styles.sort}>
                Сортировка по:
                <div className={styles.filterWrapper}>
                  <div className={`${styles.filterItem} ${selectedFilter === 'По возрастанию' ? styles.selectedFilter : ''}`}
                    onClick={() => selectFilter('По возрастанию')}>
                    По возрастанию
                  </div>
                  <div className={`${styles.filterItem} ${selectedFilter === 'По убыванию' ? styles.selectedFilter : ''}`}
                    onClick={() => selectFilter('По убыванию')}>
                    По убыванию
                  </div>
                </div>
              </div>

              <div className={styles.sort}>
                Игры
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
              </div>

              <div className={styles.sort}>
                Редкость

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
              </div>

              <div className={styles.btns}>
                <div className={styles.btns__wrapper}
                     onClick={openGames}>
                  <Button title='Применить' />
                </div>
                <div className={styles.btns__wrapper}
                     onClick={resetFilters}>
                  <Button color='brown' title='Сбросить всё' />
                </div>
              </div>

              <div className={styles.closeBtn}
                   onClick={openGames}>
                <img src={closeBtn} alt="" />
              </div>
            </div>
          </div>
          : ''
      }
    </div>
  )
}

export default Filter