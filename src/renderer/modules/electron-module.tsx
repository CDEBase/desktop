import * as React from 'react';
import { Layout } from 'antd';
import { ReduxRouter } from '@lagunovsky/redux-react-router';
import { Feature, FeatureWithRouterFactory } from '@common-stack/client-react';


const features = new Feature(FeatureWithRouterFactory);
export const MainRoute = ({ history }) => (
  <>
    {features.getWrappedRoot(
      <ReduxRouter history={history}>
        <Layout>
          <Layout.Content style={{ height: '100%' }}>
            <section className="flex-grow" style={{ height: '100%' }}>
              {features.getRoutes()}
            </section>
          </Layout.Content>
        </Layout>
      </ReduxRouter>
    )}
  </>
);

export default features;
