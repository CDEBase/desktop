/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier, global-require, no-underscore-dangle, no-nested-ternary */
import { replayActionRenderer, forwardToMainWithParams } from 'electron-redux';
import { createEpicMiddleware } from 'redux-observable';
import { createRouterReducer, createRouterMiddleware } from '@lagunovsky/redux-react-router';
import modules from '../../modules/tray';
import { createClientContainer } from './client.service';
import { isDev } from '../../../common';
import { createReduxStore as createBaseReduxStore } from '../../../common/config/base-redux-config';

export const history = require('../router-history');

const { apolloClient, container, services, logger } = createClientContainer();
export const epicMiddleware = createEpicMiddleware({
  dependencies: {
    apolloClient,
    routes: modules.getConfiguredRoutes(),
    services,
    container,
    logger,
  },
});

/**
 * Add any reducers required for this app dirctly in to
 * `combineReducers`
 */
export const createReduxStore = () => {
  // middleware
  const router = createRouterReducer(history);

  // If we have preloaded state, save it.
  const store = createBaseReduxStore({
    scope: 'browser',
    isDebug: __DEBUGGING__,
    isDev,
    initialState: {},
    middleware: [createRouterMiddleware(history)],
    // epicMiddleware,
    preMiddleware: [
      forwardToMainWithParams({
        blacklist: [/^@@/, /^redux-form/, /^contribution/, /^command/],
      }),
    ],
    // rootEpic,
    reducers: { router, ...modules.reducers },
  });

  // Delete it once we have it stored in a variable
  if (__CLIENT__) {
    delete window.__PRELOADED_STATE__;
    // electron
    replayActionRenderer(store);
  }
  container.bind('ReduxStore').toConstantValue(store);

  return store;
};
