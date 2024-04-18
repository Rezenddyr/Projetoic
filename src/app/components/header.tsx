// components/Header.tsx

import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Meu Site</h1>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
          <li>
            <Link href="/cadastro">
              <a>Cadastro</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
