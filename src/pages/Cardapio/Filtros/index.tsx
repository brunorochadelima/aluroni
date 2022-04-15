import React from 'react'
import styles from "../Filtros/Filtros.module.scss"
import filtros from "../Filtros/filtros.json"

type IOpcao = typeof filtros[0]

export default function Filtros() {

  function selecionaFiltros(opcao: IOpcao){

  }

  return (
    <div className={styles.filtros}>
      {filtros.map(opcao => (
        <button className={styles.filtros__filtro} key={opcao.id} onClick={() => selecionaFiltros(opcao)}>
        {opcao.label}
        </button>
      ))}
    </div>
  )
}
