// import react from "react";
import { useState } from "react";
// import { ReactDOM } from "react";
// import "./App.css";
// import StartScreen from "./startScreen";
// import AppOnboarding from "./AppOnboarding";
// import AppOB2 from "./AppOB2";
// import AppOB3 from "./AppOB3";
// import AppOB4 from "./AppOB4";
import Navbar from "./Navbar";

function App() {
  const [screenSubmitted, setScreenSubmitted] = useState("");

  console.log(screenSubmitted);
  return (
    <>
      {/* {(screenSubmitted === "" || screenSubmitted === "back") && (
        <StartScreen userSubmitted={setScreenSubmitted} />
      )}

      {(screenSubmitted === "apprentice" || screenSubmitted === "back2") && (
        <AppOnboarding userSubmitted={setScreenSubmitted} />
      )}

      {(screenSubmitted === "app-onboarding" ||
        screenSubmitted === "back3") && (
        <AppOB2 userSubmitted={setScreenSubmitted} />
      )}

      {(screenSubmitted === "app-onboarding2" ||
        screenSubmitted === "back4") && (
        <AppOB3 userSubmitted={setScreenSubmitted} />
      )}

      {screenSubmitted === "app-onboarding4" && (
        <AppOB4 userSubmitted={setScreenSubmitted} />
      )} */}
      <Navbar />
    </>
  );
}

export default App;
