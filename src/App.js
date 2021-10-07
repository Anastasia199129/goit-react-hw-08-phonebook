import s from './App.module.css';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import ContactViews from './views/contactsViews/ContactViews';
import Container from './components/contactList/container/Container.jsx';
import { Switch, Route } from 'react-router';
import RegisterViews from './views/registerViews/RegisterViews';
import LoginWiews from './views/loginViews/LoginWiews';
import HomeViews from './views/homeViews/HomeViews';

const App = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/">
          <HomeViews />
        </Route>
        <Route path="/register">
          <RegisterViews />
        </Route>
        <Route path="/login">
          <LoginWiews />
        </Route>
        <Route path="/contacts">
          <ContactViews />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
