import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    main: {
      begin: 'Начать',
      quests: 'Квесты'
    },
    banner: {
      title: 'Фармите с Parimatch',
      subtitle: 'Выполняйте квесты, получайте GG-баллы и обменивайте на крутые призы',
      btn: 'Фармить призы'
    },
    rules: {
      title: 'Как это работает',
      connect: 'Подключите аккаунты',
      register: 'Зарегистрируйтесь или войдите в аккаунт Parimatch и добавьте аккаунт Steam',
      quests: 'Выполняйте квесты',
      finish: 'Выполняйте квесты в PM Hero на сайте Parimatch, чтобы получать сундуки с призами. За выполнение заданий, вы также будете получать GG-баллы на сайте PM Pass.',
      chest: 'Открывайте сундуки',
      bonuses: 'В сундуках вас ждут бонусы от Parimatch и другие призы. Чем сложнее квест, тем ценнее лут!',
      store: 'Магазин призов',
      change: 'Копите GG-баллы и меняйте на бонусы и другие крутые призы на сайте PM Pass'
    },
    prizes: {
      title: 'Призы на любой вкус',
      text1: 'PM Hero и PM Pass - это ваш источник бесконечных призов. Получайте награды и GG-баллы за каждый выполненный квест на сайте Parimatch.',
      text2: 'Покупайте на баллы все, что приглянется в магазине PM Pass: скины для CS2, Dota 2, фрибеты, мерч и многое другое. Выбор за вами!'
    },
    quests: {
      text1: 'Выполняйте квесты, делая ставки на спорт или играя в Dota 2 через Steam. Чтобы посмотреть весь список заданий зайдите на сайт Parimatch и найдите раздел PM Hero.',
      text2: 'Квесты обновляются каждый день — фармите призы бесконечно!'
    }
  },
  kz: {
    banner: {
      title: 'Parimatch-пен фармда',
    }
  }
};

const currentLanguage = localStorage.getItem('language') || 'ru'

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: currentLanguage,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
