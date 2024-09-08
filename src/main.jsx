import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginScreen from './LoginScreen.jsx';
import Welcome from './Welcome.jsx';
import Registration from './Registration.jsx';

const routes = createBrowserRouter([
    { path: '/', element: <LoginScreen /> }, 
    { path: '/registration', element: <Registration /> }, 
    { path: '/home', element: <App />, children: 
        [  
            { path: '', element: <Welcome /> }  
        ]
    },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={routes} />
);
