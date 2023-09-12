// TranslateText.js
import React, { useState } from 'react';
import translate from 'google-translate-api';

const TranslateText = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    translate(text, { to: selectedLanguage }).then((response) => {
      setTranslatedText(response.text);
    });
  };

  return (
    <div>
      <textarea
        placeholder="Enter text to translate"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleTranslate}>Translate</button>
      <div>
        <p>Translated Text:</p>
        <p>{translatedText}</p>
      </div>
    </div>
  );
};

export default TranslateText;

