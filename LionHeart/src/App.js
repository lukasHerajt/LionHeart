// import react from "react";
import { useState } from "react";
// import { ReactDOM } from "react";
import StartScreen from "./startScreen";
import AppOnboarding from "./AppOnboarding";
import AppOB2 from "./AppOB2";

function App() {
  const [screenSubmitted, setScreenSubmitted] = useState("");

  console.log(screenSubmitted);
  return (
    <>
      {screenSubmitted === "" && (
        <StartScreen userSubmitted={setScreenSubmitted} />
      )}
      {screenSubmitted === "apprentice" && <AppOnboarding />}
      {screenSubmitted === "app-onboarding" && <AppOB2 />}
    </>
  );
}

export default App;
