// LanguageSelection.js
import React, { useState } from 'react';

const LanguageSelection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div>
      <h2>Select a Language:</h2>
      <div className="language-tiles">
        {languages.map((language) => (
          <div
            key={language.code}
            className={`language-tile ${selectedLanguage === language.code ? 'selected' : ''}`}
            onClick={() => handleLanguageSelect(language.code)}
          >
            {language.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelection;

