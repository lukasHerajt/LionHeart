// import react from "react";
import { useState } from "react";
// import { ReactDOM } from "react";
import "./App.css";
import StartScreen from "./startScreen";
import AppOnboarding from "./AppOnboarding";
import AppOB2 from "./AppOB2";
import AppOB3 from "./AppOB3";

function App() {
  const [screenSubmitted, setScreenSubmitted] = useState("");

  console.log(screenSubmitted);
  return (
    <>
      {screenSubmitted === "" && (
        <StartScreen userSubmitted={setScreenSubmitted} />
      )}

      {screenSubmitted === "apprentice" && (
        <AppOnboarding userSubmitted={setScreenSubmitted} />
      )}

      {screenSubmitted === "back" && (
        <StartScreen userSubmitted={setScreenSubmitted} />
      )}

      {screenSubmitted === "app-onboarding" && (
        <AppOB2 userSubmitted={setScreenSubmitted} />
      )}

      {screenSubmitted === "back2" && (
        <AppOnboarding userSubmitted={setScreenSubmitted} />
      )}

      {screenSubmitted === "app-onboarding3" && (
        <AppOB3 userSubmitted={setScreenSubmitted} />
      )}

      {screenSubmitted === "back3" && (
        <AppOB2 userSubmitted={setScreenSubmitted} />
      )}
    </>
  );
}

export default App;
