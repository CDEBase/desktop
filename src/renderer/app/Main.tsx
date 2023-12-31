import * as React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { SlotFillProvider } from '@common-stack/components-pro';
import { PluginArea, InversifyProvider } from '@common-stack/client-react';
import { ReduxRouter } from '@lagunovsky/redux-react-router';
import { PersistGate } from 'redux-persist/integration/react';
// import { ErrorBoundary } from '@admin-layout/ant-ui';
import { persistStore } from 'redux-persist';
import { createReduxStore } from '../config/main/redux-config';
import { createClientContainer } from '../config/main/client.service';
import modules, { MainRoute } from '../modules/main';

const { apolloClient: client, container } = createClientContainer();

const { store, history } = createReduxStore();
export class Main extends React.Component<{}, {}> {
  render() {
    const persistor = persistStore(store);
    return (
      <SlotFillProvider>
        <Provider store={store}>
          <ApolloProvider client={client}>
            <InversifyProvider container={container} modules={modules}>
                <PersistGate persistor={persistor}>
                  <PluginArea />
                  {modules.getWrappedRoot(
                    <ReduxRouter history={history}>
                      <MainRoute />
                    </ReduxRouter>,
                  )}
                </PersistGate>
            </InversifyProvider>
          </ApolloProvider>
        </Provider>
      </SlotFillProvider>
    );
  }
}

export default Main;
