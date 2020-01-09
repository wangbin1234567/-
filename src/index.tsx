import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './router/index';
import DatePicker from 'antd/es/date-picker'; // 加载 JS
import 'antd/es/date-picker/style/css'; // 加载 CSS
// 引入StoreContext的Provider
import StoreContext from './context/StoreContext'
import store from './store/index'


ReactDOM.render(<StoreContext.Provider value={store}>
    <App />
</StoreContext.Provider>, document.getElementById('root'));
