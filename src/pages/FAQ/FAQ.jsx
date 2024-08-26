import React from "react";
import styles from "../FAQ/FAQ.module.scss";
import Faq from "../../components/Faq/Faq";
import Header from "../../components/Header/Header";
import HeaderMob from "../../components/HeaderMob/HeaderMob";

const FAQ = () => {
  return (
    <div className={styles.container}>
      <Header />
      <HeaderMob />
      <Faq />
    </div>
  );
};

export default FAQ;
