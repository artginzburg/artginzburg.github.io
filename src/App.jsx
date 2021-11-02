import { Switch, Route } from 'react-router-dom';

import { LanguageProvider } from './contexts/LanguageContext';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </LanguageProvider>
  );
}

export default App;
