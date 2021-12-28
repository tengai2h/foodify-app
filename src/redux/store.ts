import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistStore from 'redux-persist/es/persistStore';
import thunk from 'redux-thunk';

import { rootReducer } from './rootReducer';

export const store: any = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);
