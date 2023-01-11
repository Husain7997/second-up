import './App.css';
import Home from '../src/Pages/Home/Home/Home'
import { RouterProvider } from 'react-router-dom';
import router from './Pages/Routs/Router/Router';

function App() {
  return (
    <div data-theme="cupcake" className='app mx-14'>
     <RouterProvider router={router}>
     
     </RouterProvider>
     </div>
  );
}

export default App;
