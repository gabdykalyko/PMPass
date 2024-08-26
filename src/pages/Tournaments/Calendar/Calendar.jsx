import React, { useEffect, useState } from 'react';
import styles from './Calendar.module.scss';
import arrowLeft from '../../../assets/images/icons/tournaments-arrow-left.svg';
import arrowRight from '../../../assets/images/icons/tournaments-arrow-right.svg';

const SPREADSHEET_ID = '1G8zbSbpvlUYmK04TfiF0Bjjgj013dxyMdstZLF0WBQY'
const SHEET_ID = 'Лист1'
const API_KEY = 'AIzaSyCJ-OwS_CHE1aIcz4osT4bPa1Q6Mc2AolE'

const Calendar = () => {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())

  const [data, setData] = useState([])

  const months = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ]

  const daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  // Функция, которая вычисляет первый день месяца с учетом того, что неделя начинается с понедельника
  const getFirstDayOfMonth = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1;  // Если воскресенье, то это 6, иначе сдвигаем на -1
  };

  const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
    if (currentMonth === 0) {
      setCurrentYear((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
    if (currentMonth === 11) {
      setCurrentYear((prev) => prev + 1);
    }
  }

  const renderDaysOfWeek = () => {
    return daysOfWeek.map((day, index) => (
      <div key={index} className={styles.dayOfWeek}>
        <div className={styles.dayOfWeekWrapper}>
          {day}
        </div>
      </div>
    ));
  };

  const renderDays = () => {
    const totalDays = daysInMonth(currentMonth, currentYear);
    const daysArray = [];

    // Добавляем пустые ячейки для начала месяца, чтобы первый день месяца соответствовал дню недели
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(<div key={`empty-${i}`} className={styles.dayEmpty}></div>);
    }

    // Заполняем числами дни месяца
    for (let day = 1; day <= totalDays; day++) {
      daysArray.push(<div key={day} className={styles.day}>{day}</div>);
    }
    return daysArray;
  }

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Лист1?alt=json&key=${API_KEY}`;
      
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result.values)
        console.log(result.values)
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div />

          <div className={styles.month}>
            <div className={styles.arrowWrapper} onClick={handlePrevMonth}>
              <img src={arrowLeft} alt="" />
            </div>
            <div className={styles.monthTxt}>
              {months[currentMonth]} {currentYear}
            </div>
            <div className={styles.arrowWrapper} onClick={handleNextMonth}>
              <img src={arrowRight} alt="" />
            </div>
          </div>

          <div className={styles.filter}>
            <div className={styles.filterWrapper}>
              Dota 2
            </div>
            <div className={styles.filterWrapper}>
              CS 2
            </div>
          </div>

          <div />
        </div>

        <div className={styles.grid}>
          {renderDaysOfWeek()}
          {renderDays()}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
