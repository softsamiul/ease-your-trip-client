import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import About from './pages/About/About';
import AddNewTrips from './pages/AddNewTrip/AddNewTrips';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import ManageAllTrips from './pages/ManageAllTrips/ManageAllTrips';
import MyTrips from './pages/MyTrips/MyTrips';
import NotFound from './pages/NotFound/NotFound';
import ProcessingBooking from './pages/ProcessingBooking/ProcessingBooking';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import Services from './pages/Services/Services';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';
import Login from './shared/Login/Login';
import PrivateRoute from './shared/PrivateRoute/PrivateRoute';

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
              <Route exact  path="/servicedetails/:id">
                <ServiceDetails></ServiceDetails>
              </Route>
              <Route  path="/services">
                <Services></Services>
              </Route>
              <PrivateRoute  path="/processbooking/:id">
                <ProcessingBooking></ProcessingBooking>
              </PrivateRoute>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/signin">
                <Login></Login>
              </Route>
              <PrivateRoute path="/mytrips">
                <MyTrips></MyTrips>
              </PrivateRoute>
              <PrivateRoute path="/managealltrips">
                <ManageAllTrips></ManageAllTrips>
              </PrivateRoute>
              <PrivateRoute path="/addnewtrip">
                <AddNewTrips></AddNewTrips>
              </PrivateRoute>
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
