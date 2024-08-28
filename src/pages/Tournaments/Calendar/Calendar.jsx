import React, { useEffect, useState } from 'react';
import styles from './Calendar.module.scss';
import arrowLeft from '../../../assets/images/icons/tournaments-arrow-left.svg';
import arrowRight from '../../../assets/images/icons/tournaments-arrow-right.svg';
import dota from '../../../assets/images/dota.svg'
import cs from '../../../assets/images/cs.svg'
import calendar from '../../../assets/images/calendar.svg'
import Button from '../../../components/Button/Button';
import { Link } from 'react-router-dom';

const SPREADSHEET_ID = '1G8zbSbpvlUYmK04TfiF0Bjjgj013dxyMdstZLF0WBQY'
const SHEET_ID = 'Лист1'
const API_KEY = 'AIzaSyCJ-OwS_CHE1aIcz4osT4bPa1Q6Mc2AolE'

const eventColors = [
  {
    backgroundColor: '#5A5A5A',
    color: '#FFFFFF'
  },
  {
    backgroundColor: '#333217',
    color: '#FFEB31'
  },
  {
    backgroundColor: '#3A2159',
    color: '#AE6FFF'
  },
  {
    backgroundColor: '#11362C',
    color: '#07EF9C'
  },
  {
    backgroundColor: '#19334F',
    color: '#1D92FF'
  }
]

const Calendar = () => {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())

  const [events, setEvents] = useState([])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedEventIndex, setSelectedEventIndex] = useState(null)

  const months = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ]

  const daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const getFirstDayOfMonth = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay()
    return firstDay === 0 ? 6 : firstDay - 1
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

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_ID}?alt=json&key=${API_KEY}`;

      try {
        const response = await fetch(url);
        const result = await response.json();

        result.values.shift()

        const parsedEvents = result.values.map((event, index) => {
          const [dayStart, monthStart, yearStart] = event[0]?.trim().split('.') || [];
          const [dayEnd, monthEnd, yearEnd] = event[1]?.trim().split('.') || [];

          const startDate = dayStart && monthStart && yearStart
            ? new Date(`${yearStart}-${monthStart}-${dayStart}`)
            : null;

          const endDate = dayEnd && monthEnd && yearEnd
            ? new Date(`${yearEnd}-${monthEnd}-${dayEnd}`)
            : null

          const colorIndex = index % eventColors.length
          const eventColor = eventColors[colorIndex]

          return {
            startDate,
            endDate,
            name: event[2]?.trim(),
            gameType: event[3]?.trim(),
            prize: event[4]?.trim(),
            backgroundColor: eventColor.backgroundColor,
            color: eventColor.color,
            description: event[5]?.trim(),
            img: event[6]?.trim(),
            url: event[7]?.trim()
          };
        });

        setEvents(parsedEvents)
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, [])

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


    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(<div key={`empty-${i}`} className={styles.dayEmpty}></div>);
    }

    for (let day = 1; day <= totalDays; day++) {
      const currentDate = new Date(Date.UTC(currentYear, currentMonth, day))

      const eventsForDay = events.filter(event => {
        const start = new Date(Date.UTC(event.startDate.getUTCFullYear(), event.startDate.getUTCMonth(), event.startDate.getUTCDate()));
        const end = new Date(Date.UTC(event.endDate.getUTCFullYear(), event.endDate.getUTCMonth(), event.endDate.getUTCDate()));
        return currentDate >= start && currentDate <= end;
      })


      daysArray.push(
        <div key={day} className={styles.day}>
          <span className={styles.dayNum}>{day}</span>
          {eventsForDay.map((event, index) => {

            return (
              <div
                key={index}
                className={styles.event}
                style={{
                  backgroundColor: event.backgroundColor,
                  color: event.color,
                }}
                onClick={() => {
                  setSelectedEventIndex(events.indexOf(event));
                  setIsModalOpen(true);
                }}
              >
                {event.name}
              </div>
            );
          })}
          <div className={styles.game}>
            {eventsForDay.some(event => event.gameType === "Dota 2") && (
              <div className={styles.gameItem}>
                <div>
                  <img src={dota} alt="Dota 2" />
                </div>
                <div>
                  Dota 2
                </div>
              </div>
            )}
            {eventsForDay.some(event => event.gameType === "CS 2") && (
              <div className={`${styles.gameItem} ${styles.gameItemCS}`}>
                <div>
                  <img src={cs} alt="CS 2" />
                </div>
                <div>
                  CS 2
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }

    return daysArray;
  }

  const formatEventDate = (startDate, endDate) => {
    const formatDate = (date) => {
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      return `${day}.${month}`;
    };

    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);

    if (startDate.getMonth() === endDate.getMonth()) {
      return `${formattedStartDate}-${endDate.getDate().toString().padStart(2, '0')}.${formattedEndDate.split('.')[1]}`;
    } else {
      return `${formattedStartDate}-${formattedEndDate}`;
    }
  };


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

      {
        isModalOpen &&
        <div className={styles.modal}>
          <div className={styles.modalWrapper}>
            {
              events[selectedEventIndex].img &&
              <div className={styles.modalImg} style={{ backgroundImage: `url(${events[selectedEventIndex].img})` }} />
            }
            <div className={styles.modalInfo}>
              <div className={styles.modalTitle}>
                Турнир {events[selectedEventIndex].name}
              </div>
              <div className={styles.modalGame}>
                {
                  events[selectedEventIndex].gameType === 'Dota 2'
                    ?
                    <div className={styles.modalGameItem}>
                      <div>
                        <img src={dota} alt="Dota 2" />
                      </div>
                      <div>
                        Dota 2
                      </div>
                    </div>
                    :
                    <div className={`${styles.modalGameItem} ${styles.modalGameItemCS}`}>
                      <div>
                        <img src={cs} alt="CS 2" />
                      </div>
                      <div>
                        CS 2
                      </div>
                    </div>
                }

                <div className={styles.modalCalendar}>
                  <div>
                    <img src={calendar} alt="" />
                  </div>
                  <div>
                    {
                      formatEventDate(events[selectedEventIndex].startDate, events[selectedEventIndex].endDate)
                    }
                  </div>
                </div>

              </div>

              <div className={styles.modalDescription} dangerouslySetInnerHTML={{ __html: events[selectedEventIndex].description }} />

              <div className={styles.modalBtns}>
                <div onClick={() => {
                  setSelectedEventIndex(null);
                  setIsModalOpen(false);
                }}>
                  <Button color="brown" title='Отмена' />
                </div>
                {
                  events[selectedEventIndex].url &&
                  <Link to={events[selectedEventIndex].url} target='_blank'>
                    <Button title="Перейти к турниру" />
                  </Link>
                }
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Calendar;
