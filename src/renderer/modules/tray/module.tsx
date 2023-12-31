import * as React from 'react';
import { Feature, FeatureWithRouterFactory, renderRoutes2 } from '@common-stack/client-react';
import { Layout } from 'antd';

const features = new Feature(FeatureWithRouterFactory);
export const MainRoute = (props) => (
  <Layout>
    <Layout.Content style={{ height: '100%' }}>
      <section className="flex-grow" style={{ height: '100%' }}>
        {features.getRoutes()}
      </section>
    </Layout.Content>
  </Layout>
);

export default features;
