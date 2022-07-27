import styles from '../Ordenador/Ordenador.module.scss';
import opcoes from './opcoes.json';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';

import React, { memo } from 'react';
interface Props {
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

function Ordenador({ ordenador, setOrdenador }: Props) {
  const [aberto, setAberto] = React.useState(false);
  const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;

  return (
    <button
      className={`${styles.ordenador} ${ordenador !== '' ? styles['ordenador--ativo'] : '' }`}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
      <span>{nomeOrdenador || 'Ordenar por'}</span>
      {aberto ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={`${styles.ordenador__options} ${
          aberto && styles['ordenador__options--ativo']
        }`}
      >
        {opcoes.map((opcao) => (
          <div
            className={styles.ordenador__option}
            key={opcao.value}
            onClick={() => setOrdenador(opcao.value)}
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
}

export default memo(Ordenador);