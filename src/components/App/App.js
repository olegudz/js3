import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import PropTypes from "prop-types";


export default function App({settings}) {
  return (
    <WelcomeScreen time={settings.gameTime} countErrors={settings.countErrors} />
  );
}

App.propTypes = {
  settings: PropTypes.exact({
    gameTime: PropTypes.number.isRequired,
    countErrors: PropTypes.number.isRequired,
  }
  ).isRequired,
};
