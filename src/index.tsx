import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './router/index';
import StoreContext from './context/StoreContext'
import store from './store/index'

ReactDOM.render(<StoreContext.Provider value={store}>
    <App />
</StoreContext.Provider>, document.getElementById('root'));
