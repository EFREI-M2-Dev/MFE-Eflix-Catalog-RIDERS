import React, { Suspense } from 'react';

const Header = React.lazy(() => import('header/Header'));
const Catalog = React.lazy(() => import('catalog/Catalog'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Chargement du header...</div>}>
        <Header />
      </Suspense>

      <main style={{ padding: '2rem' }}>
        <h2>Bienvenue sur Efreiflix</h2>
        <p>Contenu principal de l'application...</p>
        
        <Suspense fallback={<div>Chargement du skeleton...</div>}>
          <Catalog />
        </Suspense>
      </main>
    </div>
  );
};

export default App;