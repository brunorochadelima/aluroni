import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from 'pages/Inicio';
import Menu from 'components/menu';
import Footer from 'components/Footer';

const Cardapio = lazy(() => import('pages/Cardapio'));
const PaginaPadrao = lazy(() => import('components/PaginaPadrao'));
const NotFound = lazy(() => import('pages/NotFound'));
const Prato = lazy(() => import('pages/Prato'));
const Sobre = lazy(() => import('pages/Sobre'));

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Suspense fallback={<p>Carregando...</p>}>
          <Menu />
          <Routes>
            <Route path="/" element={<PaginaPadrao />}>
              <Route index element={<Inicio />} />
              <Route path="cardapio" element={<Cardapio />} />
              <Route path="sobre" element={<Sobre />} />
            </Route>
            <Route path="prato/:id" element={<Prato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </main>
  );
}

/* Páginas Início e Cardápio são relativos a Página Padrão, a página Padrão(banner com foto) só aparece se a página filho existir
é necessário declarar o atributo <Outlet /> na página padrão.
*/
