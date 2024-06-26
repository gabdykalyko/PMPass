import React, { useState } from 'react';
import styles from './Pagination.module.scss';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxPages = 5;
  const [startPage, setStartPage] = useState(1);

  const handleNextClick = () => {
    if (startPage + maxPages <= totalPages) {
      setStartPage(startPage + maxPages);
    } else {
      setStartPage(totalPages - maxPages + 1);
    }
  };

  const handlePrevClick = () => {
    if (startPage - maxPages >= 1) {
      setStartPage(startPage - maxPages);
    } else {
      setStartPage(1);
    }
  };

  const renderPages = () => {
    const pages = [];

    for (let i = startPage; i < startPage + maxPages && i <= totalPages; i++) {
      pages.push(
        <button key={i} onClick={() => onPageChange(i)} className={`${styles.btn} ${i === currentPage ? styles.active : ''}`}>
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className={styles.pagination}>
      {startPage > 1 && (
        <button onClick={handlePrevClick} className={styles.prev}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_3701_3679" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_3701_3679)">
              <path d="M12.6008 11.9998L8.70078 8.0998C8.51745 7.91647 8.42578 7.68314 8.42578 7.3998C8.42578 7.11647 8.51745 6.88314 8.70078 6.6998C8.88411 6.51647 9.11745 6.4248 9.40078 6.4248C9.68411 6.4248 9.91745 6.51647 10.1008 6.6998L14.7008 11.2998C14.8008 11.3998 14.8716 11.5081 14.9133 11.6248C14.9549 11.7415 14.9758 11.8665 14.9758 11.9998C14.9758 12.1331 14.9549 12.2581 14.9133 12.3748C14.8716 12.4915 14.8008 12.5998 14.7008 12.6998L10.1008 17.2998C9.91745 17.4831 9.68411 17.5748 9.40078 17.5748C9.11745 17.5748 8.88411 17.4831 8.70078 17.2998C8.51745 17.1165 8.42578 16.8831 8.42578 16.5998C8.42578 16.3165 8.51745 16.0831 8.70078 15.8998L12.6008 11.9998Z" fill="#1B1E23" />
            </g>
          </svg>


        </button>
      )}
      {renderPages()}
      {startPage + maxPages <= totalPages && (
        <button onClick={handleNextClick} className={styles.next}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_3701_3679" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_3701_3679)">
              <path d="M12.6008 11.9998L8.70078 8.0998C8.51745 7.91647 8.42578 7.68314 8.42578 7.3998C8.42578 7.11647 8.51745 6.88314 8.70078 6.6998C8.88411 6.51647 9.11745 6.4248 9.40078 6.4248C9.68411 6.4248 9.91745 6.51647 10.1008 6.6998L14.7008 11.2998C14.8008 11.3998 14.8716 11.5081 14.9133 11.6248C14.9549 11.7415 14.9758 11.8665 14.9758 11.9998C14.9758 12.1331 14.9549 12.2581 14.9133 12.3748C14.8716 12.4915 14.8008 12.5998 14.7008 12.6998L10.1008 17.2998C9.91745 17.4831 9.68411 17.5748 9.40078 17.5748C9.11745 17.5748 8.88411 17.4831 8.70078 17.2998C8.51745 17.1165 8.42578 16.8831 8.42578 16.5998C8.42578 16.3165 8.51745 16.0831 8.70078 15.8998L12.6008 11.9998Z" fill="#1B1E23" />
            </g>
          </svg>

        </button>
      )}
    </div>
  );
};

export default Pagination;
