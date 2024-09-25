import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Counter from './components/counter/Counter';
import Feedback from './components/feedback/Feedback';
import FetchDog from './components/fetchDog/FetchDog';
import HomePage from './components/homepage/HomePage';
import MyForm from './components/myForm/MyForm';
import './index.css';
import Layout from './layout/Layout';
import NoPage from './components/noPage/NoPage';
import Lesson01 from './lessons/lesson_01/Lesson01';
import Lesson02 from './lessons/lesson_02/Lesson02';
import Lesson03 from './lessons/lesson_03/Lesson03';


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
        {/* значение path - это путь до компонента, это значение мы пропишем в элементе Link, который должен привести нас к этому компоненту */}
        {/* то есть в path могут прописаны любые значения одной строкой без пропуска - важно сопоставлять их со значениями в ссылке */}
        <Route element={<HomePage />} path='/' />
        <Route element={<FetchDog />} path='fetch-dog' />
        <Route element={<Counter />} path='counter' />
        <Route element={<MyForm />} path='my-form' />
        <Route element={<Feedback />} path='feedback' />
        <Route element={<Lesson01 />} path='lesson-1' />
        <Route element={<Lesson02 />} path='lesson-2' />
        <Route element={<Lesson03 />} path='lesson-3' />
        <Route element={<NoPage />} path='*' />

      </Route>
    </Routes>
  </HashRouter>
);



