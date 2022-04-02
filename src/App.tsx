import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { LanguageProvider } from './contexts/LanguageContext';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route element={<NotFound />} />
          </Routes>
        </main>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
