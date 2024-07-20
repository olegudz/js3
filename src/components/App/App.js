import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";

export default function App({settings}) {
  return (
    <WelcomeScreen time={settings.gameTime} countErrors={settings.countErrors} />
  );
}
