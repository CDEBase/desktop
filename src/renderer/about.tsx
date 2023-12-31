import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './config/public-config';
import About from './app/About';
import '~antd/dist/antd.css';

// Virtual (module as any), generated in-memory by zenjs, contains count of backend rebuilds
// tslint:disable-next-line
// import 'backend_reload';

const rootEl = document.getElementById('app');
let frontendReloadCount = 0;

const renderApp = ({ key }: { key: number }) => ReactDOM.render(<About key={key} />, rootEl);
renderApp({ key: frontendReloadCount });
if (__DEV__) {
  if ((module as any).hot) {
    (module as any).hot.accept();
    // (module as any).hot.accept('backend_reload', () => {
    //   // log.debug('Reloading front-end');
    //   // when the backend restarts wait for 5 seconds
    //   setTimeout(() => window.location.reload(), 5000);
    //   // window.location.reload();
    // });
    (module as any).hot.accept((err) => {
      if (err) {
        console.error('Cannot apply HMR update.', err);
      }
    });
    //  but if RHL not working we can uncomment below code to make normal HMR to refresh the page
    (module as any).hot.accept('./app/About', () => {
      try {
        console.log('Updating front-end');
        frontendReloadCount = (frontendReloadCount || 0) + 1;

    renderApp({ key: frontendReloadCount });
    } catch (err) {
    // log(err.stack);
    }
  });
  }
}
