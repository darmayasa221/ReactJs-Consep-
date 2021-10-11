import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Calender from "./components/Pages/PagesCalender/Calender";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <h1> hello React !!</h1>
        <Calender />
      </main>
      <Footer />
    </>
  );
};

export default App;
