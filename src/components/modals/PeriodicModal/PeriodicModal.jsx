import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PeriodicModal.module.scss";
import close from "../../../assets/images/icons/close-btn.svg";
import Button from "../../Button/Button";
import periodic_modal_flame from "../../../assets/images/periodic_modal_flame.png";

const PeriodicModal = ({ closeForm, onRegisterClick }) => {
  const navigate = useNavigate(); 

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      closeForm();
    }
  };

  const handleShopClick = () => {
    closeForm(); 
    navigate("/shop"); 
  };

  return (
    <div className={styles.wrapper} onClick={handleOutsideClick}>
      <div className={styles.container}>
        <img src={periodic_modal_flame} alt="Flame" />
        <div className={styles.title}>Успейте потратить PM баллы!</div>
        <div className={styles.content}>
          <p>Летний сезон заканчивается 4 сентября.</p>
        </div>
        <div className={styles.btn} onClick={handleShopClick}>
          <Button title="Магазин" />
        </div>
      </div>
    </div>
  );
};

export default PeriodicModal;
