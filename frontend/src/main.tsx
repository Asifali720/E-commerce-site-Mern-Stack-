import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DataProvider from './components/context/DataProvider.tsx'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
    <DataProvider>
    <App />
    <ToastContainer />
    </DataProvider>
    </ BrowserRouter> 
  </StrictMode>,
)
