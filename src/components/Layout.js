import React from 'react';

const Layout = ({ children }) => (
    <div className="container">
        <header>
            <h1>Link Shortener</h1>
        </header>
        <main>{children}</main>
        <footer>
            <p>&copy; 2024 SvelteKit BomBalelo Soft inc.</p>
        </footer>
    </div>
);

export default Layout;
