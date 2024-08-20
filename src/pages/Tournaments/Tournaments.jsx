import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { updateAuth } from "../../slices/authSlice";
import Toast from "../../components/Toast/Toast";
import { toast } from "react-toastify";
import Header from "../../components/Header/Header";
import HeaderMob from "../../components/HeaderMob/HeaderMob";
import Footer from "../../components/Footer/Footer";
import Offer from "../../components/modals/Offer/Offer";
import Bonus from "../../components/modals/Bonus/Bonus";
import OfferRules from "../../components/modals/OfferRules/OfferRules";
import OfferRulesAccept from "../../components/modals/OfferRulesAccept/OfferRulesAccept";
import Form from "../../components/modals/Form/Form";
import styles from './Tournaments.module.scss'
import arrowLeft from '../../assets/images/icons/tournaments-arrow-left.svg'
import arrowRight from '../../assets/images/icons/tournaments-arrow-right.svg'

const Tournaments = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showHelp, setShowHelp] = useState(false);
  const [showOffer, setShowOffer] = useState(false);
  const [showBonus, setShowBonus] = useState(false);
  const [showOfferRules, setShowOfferRules] = useState(false);

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const publicOfferAccepted = useSelector(state => state?.auth?.user?.public_offer_accepted);

  const { t } = useTranslation(['main', 'notifications']);

  const dispatch = useDispatch();

  const handleLoginClick = () => {
    document.body.style.overflow = 'hidden';
    setIsFormOpen(true);
    setShowLogin(true);
    setShowHelp(false);
  };

  const handleRegisterClick = () => {
    document.body.style.overflow = 'hidden';
    setIsFormOpen(true);
    setShowLogin(false);
    setShowOffer(false);
    setShowBonus(false);
    setShowOfferRules(false);
  };

  const handleHelpClick = () => {
    setShowHelp(true);
  };

  const handleOfferClick = () => {
    setIsFormOpen(false);
    setShowOffer(true);
  };

  const handleBonusClick = () => {
    setIsFormOpen(false);
    setShowBonus(true);
  };

  const handleOfferRulesClick = () => {
    setIsFormOpen(false);
    setShowOfferRules(true);
  };

  const closeForm = () => {
    document.body.style.overflow = 'auto';
    setIsFormOpen(false);
    setShowHelp(false);
    setShowOffer(false);
    setShowBonus(false);
    setShowOfferRules(false);
  };

  useEffect(() => {
    const currentURL = window.location.href;

    const firstLogin = async () => {
      try {
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/profile`, {
          "first_login": false
        }, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });

        if (response.data) {
          dispatch(updateAuth({
            isAuthenticated: true,
            user: response.data
          }));

          localStorage.setItem('currentPage', 1);
        }

      } catch (error) {
        console.error(error);
      }
    };

    if (currentURL.includes('?steam_auth=success')) {
      firstLogin();
      toast(<Toast message={t('notifications:steam_attached')} />, {
        hideProgressBar: true
      });
    }
  }, [dispatch, t, isAuthenticated]);

  return (
    <div>
      <Header onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick} />
      <HeaderMob onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick} />

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div />

            <div className={styles.month}>
              <div className={styles.arrowWrapper}>
                <img src={arrowLeft} alt="" />
              </div>
              <div className={styles.monthTxt}>
                Август 2024
              </div>
              <div className={styles.arrowWrapper}>
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
        </div>
      </div>

      <Footer />
      {isFormOpen && (
        <Form showLogin={showLogin}
          closeForm={closeForm}
          onLoginClick={handleLoginClick}
          onRegisterClick={handleRegisterClick}
          onHelpClick={handleHelpClick}
          showHelp={showHelp}
          onOfferClick={handleOfferClick}
          onBonusClick={handleBonusClick}
          showOfferRules={showOfferRules}
          onOfferRulesClick={handleOfferRulesClick} />
      )}
      {showOffer && <Offer closeForm={closeForm}
        onRegisterClick={handleRegisterClick} />}
      {showBonus && <Bonus closeForm={closeForm}
        onRegisterClick={handleRegisterClick} />}
      {showOfferRules && <OfferRules closeForm={closeForm}
        onRegisterClick={handleRegisterClick} />}
      {isAuthenticated && !publicOfferAccepted && <OfferRulesAccept />}
    </div>
  )
}

export default Tournaments