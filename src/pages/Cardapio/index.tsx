import React from 'react';
import styles from './Cardapio.module.scss';
import Filtros from './Filtros';
import Ordenador from './Ordenador/Index';
import Itens from './Itens/Index';
import Buscador from './Buscador';
import stylesTema from 'styles/Tema.module.scss';

function Cardapio() {
  const [busca, setBusca] = React.useState('');
  const [filtro, setFiltro] = React.useState<number | null>(null);
  const [ordenador, setOrdenador] = React.useState('');
  return (
    <section className={styles.cardapio}>
      <h3 className={stylesTema.titulo}>Cardápio</h3>
      <Buscador busca={busca} setBusca={setBusca} />
      <div className={styles.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro} />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
      </div>
      <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
    </section>
  );
}

export default Cardapio;
