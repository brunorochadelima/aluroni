import styles from "../Ordenador/Ordenador.module.scss";
import opcoes from "./opcoes.json";
import {MdKeyboardArrowUp} from 'react-icons/md'
import {MdKeyboardArrowDown} from 'react-icons/md'

import React from "react";

export default function Ordenador() {
  const [aberto, setAberto] = React.useState(false);
  return (
    <button
      className={styles.ordenador}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
      <span>Ordenar por</span>
      {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20}/>}
      <div
        className={`${styles.ordenador__options} ${
          aberto && styles["ordenador__options--ativo"]
        }`}
      >
        {opcoes.map((opcao) => (
          <div className={styles.ordenador__option} key={opcao.value}>
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
}


