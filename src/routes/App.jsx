import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../containers/Layout';
import { Login } from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.scss'

const App = () => {
        return (
            <BrowserRouter>
                <Routes>
                    <Layout>
                        <Route path='/' component={<Home />} />
                        <Route path='/login' component={Login} />
                        <Route path='/recovery-password' component={<RecoveryPassword />} />
                        <Route component={<NotFound />} />
                    </Layout>
                </Routes>
            </BrowserRouter>
        );
}

export default App;