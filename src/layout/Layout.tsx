import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import styles from './layout.module.css';

const Layout = () => {
  return (
    <div className={styles.pageWrapper}>
      {/* вынесли header в отдельный компонент */}
      <Header />
      <main className={styles.main}>
        {/* за место компонента outlet импортированного из библиотеки react-router-dom будут приходить компоненты из routing, чьи пути мы пропишем в index.tsx */}
        <Outlet />
        {/* здесь мог бы быть (и будет)  ваш компонент */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
