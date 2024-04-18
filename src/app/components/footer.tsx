import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <h1>Meu Site</h1>
      {/* Adicione outros elementos do cabeçalho conforme necessário */}
    </footer>
  );
};

export default Footer;