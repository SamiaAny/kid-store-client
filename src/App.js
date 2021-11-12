import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AllProduct from './pages/AllProduct/AllProduct/AllProduct';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/NotFound/NotFound';
import ContactUs from './pages/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/product">
              <AllProduct></AllProduct>
            </Route>
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <PrivateRoute path="/booking/:productId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
