import * as React from 'react';

export namespace IWindowHeader {
  export interface CompProps {
    close: boolean;
    minimize: boolean;
    maximize: boolean;
    title: string;
  }

  export type Props = CompProps;
}

/* this code is temparay, will be remove once service connected */
let remote: any;

export class WindowHeader extends React.Component<IWindowHeader.Props> {
  handleWindowClose = () => {
    if (this.props.close) {
      remote.app.dock.hide();
      remote.getCurrentWindow().hide();
    }
    return false;
  }
  handleWindowMinimize = () => {
    if (this.props.minimize) {
      remote.getCurrentWindow().minimize();
    }
    return false;
  }
  handleWindowToggleMaximize = () => {
    if (this.props.maximize) {
      if (remote.getCurrentWindow().isMaximized()) {
        remote.getCurrentWindow().unmaximize();
      } else {
        remote.getCurrentWindow().maximize();
      }
    }
    return false;
  }

  render() {
    return (
      <div className='window-header' onDoubleClick={ this.handleWindowToggleMaximize }>
        <div className='window-header-controls'>
          <div className={`btn ${this.props.close    ? 'close'    : 'disabled' }`} onClick={ this.handleWindowClose } />
          <div className={`btn ${this.props.minimize ? 'minimize' : 'disabled' }`} onClick={ this.handleWindowMinimize } />
          <div className={`btn ${this.props.maximize ? 'maximize' : 'disabled' }`} onClick={ this.handleWindowToggleMaximize } />
        </div>

        <div className='window-header-title'>{this.props.title}</div>
      </div>
    );
  }
};
