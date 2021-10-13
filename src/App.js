import s from './App.module.css';
import Container from './components/contactList/container/Container.jsx';
import { Switch, Route } from 'react-router';
import AppBar from './components/appBar/AppBar';
import { useDispatch } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import operations from './redux/auth/auth-operations';
import PrivatRoute from './components/routes/PrivatRoute';

const HomeViews = lazy(() => import('./views/homeViews/HomeViews'));
const RegisterViews = lazy(() => import('./views/registerViews/RegisterViews'));
const LoginWiews = lazy(() => import('./views/loginViews/LoginWiews'));
const ContactViews = lazy(() => import('./views/contactsViews/ContactViews'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={HomeViews}></Route>
          <Route path="/register" component={RegisterViews}></Route>
          <Route path="/login" component={LoginWiews}></Route>
          {/* <Route path="/contacts" component={ContactViews}></Route> */}
          <PrivatRoute path="/contacts">
            <ContactViews />
          </PrivatRoute>
        </Suspense>
      </Switch>
    </Container>
  );
};

export default App;
