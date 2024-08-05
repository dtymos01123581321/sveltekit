import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LinkForm from './components/LinkForm';
import LinkStats from './components/LinkStats';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<LinkForm />} />
                    <Route path="/:shortUrl/stats" element={<LinkStats />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
