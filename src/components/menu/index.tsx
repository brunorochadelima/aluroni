import React from 'react';
import { ReactComponent as Logo } from 'assets/logo.svg';
//import logo from 'assets/logo.svg';
import styles from './Menu.module.scss';

export default function Menu() {
  const rotas = [
    {
      label: 'Início',
      to: '/',
    },
    {
      label: 'Cardápio',
      to: '/cardapio',
    },
    {
      label: 'Sobre',
      to: '/sobre',
    },
  ];

  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <a href={rota.to}>{rota.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
