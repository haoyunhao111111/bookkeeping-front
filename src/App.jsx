import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import { ConfigProvider } from 'zarm'
import zhCN from 'zarm/lib/config-provider/locale/zh_CN'
import 'zarm/dist/zarm.css'

import routerList from './router/index'

function App() {
    return (
        <Router>
            <ConfigProvider primaryColor={'#007fff'} locale={zhCN}>
                <Routes>
                    { routerList.map(route => 
                        <Route 
                            key={ route.path } 
                            path={ route.path } 
                            element={<route.component />}>
                        </Route>) 
                    }
                </Routes>
             </ConfigProvider>
        </Router>
    )
}

export default App