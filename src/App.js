
import { 
  RouterProvider, 
  createBrowserRouter 
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import RootLayout from './pages/Root';
import AboutPage from './pages/About';
import ModelsPage from './pages/Models';
import TestimonialsPage from './pages/Testimonials';
import TeamPage from './pages/Team';
import ContactPage from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'models',
        element: <ModelsPage />
      },
      {
        path: 'testimonials',
        element: <TestimonialsPage />
      },
      {
        path: 'team',
        element: <TeamPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      }
    ],
  }
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
