import * as React from 'react';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { all } from 'redux-saga/effects';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { reducer as reduxFormReducer } from 'redux-form';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { render } from 'react-dom';

const composeEnhancers = typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ })
    : compose;

function* sagas() {
  // yield all([ baseSaga() ]);
}

const history = createBrowserHistory();

const combinedReducers = connectRouter(history)(
  combineReducers({
    // base,
    form: reduxFormReducer
  })
);

const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(
  applyMiddleware(
    sagaMiddleware,
    routerMiddleware(history)
  )
);
const store = createStore(combinedReducers, enhancer);

sagaMiddleware.run(sagas);
// store.dispatch(init());

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
