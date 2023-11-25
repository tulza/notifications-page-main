import { useState } from "react";
import "./style/styles.css";
import NotifBox from "./components/NotifBox";

function App() {
  return (
    <>
      <div className="flex justify-center align-middle">
        <NotifBox />
      </div>
    </>
  );
}

export default App;
