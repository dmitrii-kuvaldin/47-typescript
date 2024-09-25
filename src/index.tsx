import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Counter from './components/counter/Counter';
import Feedback from './components/feedback/Feedback';
import FetchDog from './components/fetchDog/FetchDog';
import HomePage from './components/homepage/HomePage';
import MyForm from './components/myForm/MyForm';
import './index.css';
import Layout from './layout/Layout';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // оборачиваем все приложение в особый компонент HashRouter из библиотеки react-router-dom
  <HashRouter>
    {/* импортируем компонент Routes (пути) вокруг всех компонентов */}
    <Routes>
      {/* в обертке Route (один пути) передаем пропсами: element - вызов компонента-обертки (который всегда будет на странице) path - строчное значение пути до компонента */}
      <Route path='/' element={<Layout />}>
        <Route element={<HomePage />} path='/' />
        <Route element={<FetchDog />} path='fetch-dog' />
        <Route element={<Counter />} path='counter' />
        <Route element={<MyForm />} path='my-form' />
        <Route element={<Feedback />} path='feedback' />
      </Route>
    </Routes>
  </HashRouter>
);



