import React from "react";
import Header from "../components/Header";
import "../styles/HistoryPage.css";

const HistoryPage = () => {
  return (
    <>
      <Header />
      <div className="history-page-bg">
        <div className="bubble bubble-yellow" />
        <div className="bubble bubble-blue" />
        <div className="bubble bubble-red" />

        <main className="history-content">
          <section className="history-card">
            <h1 className="history-title">HISTORY</h1>

            <h2 className="history-period">
              Pre-historic &amp; Ancient Period | 1 000 000 BCE – 217 CE
            </h2>
            <ul className="history-list">
              <li>
                <strong>Prehistoric culture:</strong> The ancient Dacians, an
                Indo-European people, inhabited the Carpathian-Danubian region.
              </li>
              <li>
                <strong>Dacia Kingdom:</strong> In 106 AD, the Roman Empire
                conquered Dacia under Emperor Trajan, leading to a lasting Latin
                influence.
              </li>
              <li>
                <strong>Roman withdrawal:</strong> After the 3rd century AD, the
                region faced migrations (Goths, Huns, Slavs).
              </li>
            </ul>

            <h2 className="history-period">Early Middle Ages | 300 – 1350</h2>
            <ul className="history-list">
              <li>
                Three principalities emerged:{" "}
                <strong>Wallachia</strong>, <strong>Moldavia</strong>, and{" "}
                <strong>Transylvania</strong>.
              </li>
              <li>
                These regions faced Ottoman domination but preserved autonomy to
                varying degrees.
              </li>
            </ul>

            <h2 className="history-period">Modern Era | 1859 – Present</h2>
            <ul className="history-list">
              <li>
                <strong>1859:</strong> Wallachia and Moldavia united, forming
                modern Romania.
              </li>
              <li>
                <strong>1877:</strong> Independence from the Ottoman Empire.
              </li>
              <li>
                <strong>1918:</strong> Transylvania united with Romania, creating
                Greater Romania.
              </li>
              <li>
                <strong>1947–1989:</strong> Communist rule, ending with the
                revolution of December 1989.
              </li>
              <li>
                <strong>Since 1989:</strong> Democratic republic, joined NATO
                (2004) and the EU (2007).
              </li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default HistoryPage;