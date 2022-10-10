// import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Main from './componts/Main/Main';
import Topics from '../src/componts/Topics/Topics'
import Statistics from '../src/componts/Statistics/Statistics'
import Blog from '../src/componts/Blog/Blog'
import ErrorPage from './componts/ErrorPage/ErrorPage';

function App() {
  const router =  createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Topics></Topics>
        },
        {
          path: '/statistics', 
          element: <Statistics></Statistics>
        },
        {
          path: '/log',
          element: <Blog></Blog>
        }
      ]
      
    }
  ])
  return (
    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
