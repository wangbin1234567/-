import React from 'react';
import RouterView from './RouterView'
import config from './routerConfig'
import {BrowserRouter} from 'react-router-dom'

export default ()=>{
    return <BrowserRouter>
        <RouterView routes={config.routes}/>
    </BrowserRouter>
}