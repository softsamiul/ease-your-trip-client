import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route  path="/home">
                <Home></Home>
              </Route>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
