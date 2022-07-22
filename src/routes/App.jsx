import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from '../containers/Layout';
import Login from '../pages/Login';
import RecoveryPassword from '../pages/RecoveryPassword';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

import '../styles/global.scss'

const App = () => {
        return (
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/recovery-password" element={<RecoveryPassword />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </Router>
        );
}

export default App;