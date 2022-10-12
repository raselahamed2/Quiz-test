// import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Main from './componts/Main/Main';
import Topics from '../src/componts/Topics/Topics'
import Statistics from '../src/componts/Statistics/Statistics'
import Blog from '../src/componts/Blog/Blog'
import ErrorPage from './componts/ErrorPage/ErrorPage';
import Quiz from './componts/Quiz/Quiz';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const router =  createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          loader:() => fetch('https://openapi.programming-hero.com/api/quiz') ,
          element: <Topics></Topics>
        },
        {
          path: '/statistics', 
          loader:() => fetch('https://openapi.programming-hero.com/api/quiz') ,
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/quiz/:quizId',
          loader: async ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element: <Quiz></Quiz>
        }
      ]
      
    }
  ])
  return (
    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
      <ToastContainer/>
    </div>
  );
}

export default App;
