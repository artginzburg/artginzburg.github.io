import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';

import { LanguageProvider } from './contexts/LanguageContext';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import NotFound from './components/NotFound/NotFound';

import { localStorageProvider } from './queries/localStorageProvider';

function App() {
  return (
    <SWRConfig value={{ provider: localStorageProvider }}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <LanguageProvider>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </LanguageProvider>
      </BrowserRouter>
    </SWRConfig>
  );
}

export default App;
