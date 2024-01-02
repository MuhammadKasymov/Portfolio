import React from "react";
import styles from "./App.module.scss";
import Navigation from "@components/Navigation/Navigation";

function App() {
  return (
    <div className={styles.app}>
      <Navigation />
    </div>
  );
}

export default App;
