import React from "react";
import {createRoot} from 'react-dom/client';
import App from './components/App/App';

function init() {
  const settings = {
    gameTime: 5,
    countErrors: 3,
  };

  const root = createRoot(document.getElementById(`root`));
  root.render(<App settings={settings} />);
}

init();
