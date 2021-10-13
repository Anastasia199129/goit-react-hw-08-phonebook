import Container from './components/contactList/container/Container.jsx';
import { Switch } from 'react-router';
import AppBar from './components/appBar/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import operations from './redux/auth/auth-operations';
import PrivatRoute from './components/routers/PrivatRoute';
import PublicRoute from './components/routers/PublicRoute';
import authSelectors from './redux/auth/auth-selectors.js';

const HomeViews = lazy(() => import('./views/homeViews/HomeViews'));
const RegisterViews = lazy(() => import('./views/registerViews/RegisterViews'));
const LoginWiews = lazy(() => import('./views/loginViews/LoginWiews'));
const ContactViews = lazy(() => import('./views/contactsViews/ContactViews'));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingcurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingcurrentUser && (
      <Container>
        <AppBar />
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <PublicRoute exact path="/">
              <HomeViews />
            </PublicRoute>
            <PublicRoute exact path="/register" restricted redirectTo="/contacts">
              <RegisterViews />
            </PublicRoute>
            <PublicRoute exact path="/login" restricted redirectTo="/contacts">
              <LoginWiews />
            </PublicRoute>
            <PrivatRoute path="/contacts" redirectTo="/login">
              <ContactViews />
            </PrivatRoute>
          </Suspense>
        </Switch>
      </Container>
    )
  );
};

export default App;
