import React from 'react';
import styles from './Cardapio.module.scss';
//import logo from "./assets/logo.svg";
import logo from 'assets/logo.svg';
import Filtros from './Filtros';
import Ordenador from './Ordenador/Index';
import Itens from './Itens/Index';
import Buscador from './Buscador';

function Cardapio() {
    const [busca, setBusca] = React.useState('');
    const [filtro, setFiltro] = React.useState<number | null>(null);
    const [ordenador, setOrdenador] = React.useState('');
    return (
        <main>
            <nav className={styles.menu}>
                <img src={logo} alt="Logo do aluroni" />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>A casa do código e da massa</div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Buscador busca={busca} setBusca={setBusca} />
                <div className={styles.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro} />
                    <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
                </div>
                <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
            </section>
        </main>
    );
}

export default Cardapio;
