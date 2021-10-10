// import { createStore, combineReducers } from 'redux';
import contactsReduser from './contacts/contacts-redusers';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReduser from './auth/auth-slice';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  persistReducer,
} from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const authPersistCpnfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistCpnfig, authReduser),
    contacts: contactsReduser,
  },
  middleware,

  // enhancers: [enhanser],
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //     myMiddlware,
  //   }).concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);
const persistor = persistStore(store);
export default { store, persistor };
