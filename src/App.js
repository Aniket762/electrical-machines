import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
import Machine1 from './pages/machine1/machine1';
import Machine2 from './pages/machine2/machine2';
import Machine3 from './pages/machine3/machine3';
function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/machine-1' exact component={Machine1} />
        <Route path='/machine-2' exact component={Machine2} />
        <Route path='/machine-3' exact component={Machine3} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
