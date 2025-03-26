import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
      translation: {
        welcome: "Welcome to the CAT Foundation!",
        adopt: "Adopt",
        contact: "Contact",
        availableCats: "Available Cats",
        formSuccess: "Your message has been sent!"
      }
    },
    es: {
      translation: {
        welcome: "¡Bienvenido a la Fundación de GATOS!",
        adopt: "Adoptar",
        contact: "Contacto",
        availableCats: "Gatos Disponibles",
        formSuccess: "¡Tu mensaje ha sido enviado!"
      }
    },
    ja: {
      translation: {
        welcome: "ようこそ、猫の財団へ！",
        adopt: "里親になる",
        contact: "お問い合わせ",
        availableCats: "里親募集中の猫",
        formSuccess: "メッセージが送信されました！"
      }
    }
  };
  

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  }
});

export default i18n;
