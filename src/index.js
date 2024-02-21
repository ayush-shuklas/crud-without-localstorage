import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Read from './Read';
import Update from './Update';
import Create from './Create';

const router = createBrowserRouter(
  [{
    path:"/",
    element: <Create/>,
    errorElement:<h1>Hello sahi se kr bhai</h1>
  },{
    path:"/read",
    element: <Read/>
  },
  {
    path:"/update/:id",
    element: <Update/>
  },
  {
    path:"/Create",
    element: <Create/>
  }]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
