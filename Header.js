import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Aplikasi Pembelajaran Interaktif</h1>
            <nav>
                <a href="/">Beranda</a>
                <a href="/login">Login</a>
                <a href="/register">Registrasi</a>
            </nav>
        </header>
    );
};

export default Header;