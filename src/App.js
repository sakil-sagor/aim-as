import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import AboutUs from './Components/AboutUs/AboutUs';
import NotFound from './Components/NotFound/NotFound';
import ContactUs from './Components/ContactUs/ContactUs';
import Teachers from './Components/Teachers/Teachers';
import TeacherDetails from './Components/TeacherDetails/TeacherDetails';
import LoginPage from './Components/LoginPage/LoginPage';
import AuthProvider from './Context/AuthProvider';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import AllServices from './Components/AllServices/AllServices';
import ServicesDetails from './Components/ServicesDetails/ServicesDetails';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/allServices">
              <AllServices></AllServices>
            </Route>
            <PrivateRoute exact path="/allServices/:idService">
              <ServicesDetails></ServicesDetails>
            </PrivateRoute>
            <Route exact path="/teachers">
              <Teachers></Teachers>
            </Route>
            <PrivateRoute exact path="/teachers/:idTeacher">
              <TeacherDetails></TeacherDetails>
            </PrivateRoute>
            <Route exact path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="/contact">
              <ContactUs></ContactUs>
            </Route>
            {/* <PrivateRoute exact path="/profile">
              <ProfilePage></ProfilePage>
            </PrivateRoute> */}
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/login">
              <LoginPage></LoginPage>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router >
      </AuthProvider>

    </div>
  );
}

export default App;
