import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import HeaderContainer from '../src/containers/HeaderContainer.jsx';
import OverviewContainer from '../src/containers/OverviewContainer.jsx';


import store from './store/store.js';

class Orichalcum extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('this.props in index.jsx', this);
    return (
      <React.Fragment>
        <HeaderContainer />
        <OverviewContainer />
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Orichalcum />
  </Provider>,
  document.getElementById('orichalcum'))