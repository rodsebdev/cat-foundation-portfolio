import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => i18n.changeLanguage(lang);

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>🇺🇸</button>
      <button onClick={() => changeLanguage('es')}>🇪🇸</button>
      <button onClick={() => changeLanguage('ja')}>🇯🇵</button>
    </div>
  );
};

export default LanguageSelector;
