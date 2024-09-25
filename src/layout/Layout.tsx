import { Outlet } from 'react-router-dom';
import styles from './layout.module.css'

const Layout = () => {
  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}></header>
      <main className={styles.main}>
        {/* за место компонента outlet импортированного из библиотеки react-router-dom будут приходить компоненты из routing, чьи пути мы пропишем в index.tsx */}
        <Outlet/>
        {/* здесь мог бы быть (и будет)  ваш компонент */}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Layout;
