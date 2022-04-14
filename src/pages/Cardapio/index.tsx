import React from "react";
import styles from "./Cardapio.module.scss";
import logo from "../../assets/logo.svg"



function Cardapio() {
  return (
    <main>
      <nav className={styles.menu}>
      <img src={logo} alt="Logo do aluroni" />
      </nav>
    </main>
  );
}

export default Cardapio;
