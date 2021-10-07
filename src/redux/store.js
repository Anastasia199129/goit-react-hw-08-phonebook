// import { createStore, combineReducers } from 'redux';
import contactsReduser from './contacts/contacts-redusers';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { applyMiddleware } from 'redux';

import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import logger from 'redux-logger';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

// const enhanser = applyMiddleware(logger, middleware);

const store = configureStore({
  reducer: {
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

export default store;
