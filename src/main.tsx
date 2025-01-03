import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import ServicePage from './pages/ServicePage'
import TermsPage from './pages/TermsPage'
import CareerPage from './pages/Careers/CareerPage'
import FAQPage from './pages/FAQPage'
import BlogPage from './pages/BlogPage'
import PortfolioPage from './pages/Portfolio/PortfolioPage'
import ProjectPage from './pages/Portfolio/ProjectPage'
import JobPage from './pages/Careers/JobPage'

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: 'about',
    element: <AboutPage />,
  },
  {
    path: 'contact',
    element: <ContactPage />,
  },
  {
    path: 'services',
    element: <ServicePage />,
  },
  {
    path: 'terms',
    element: <TermsPage />,
  },
  {
    path: 'careers',
    element: <CareerPage />,
  },
  {
    path: 'faq',
    element: <FAQPage />,
  },
  {
    path: 'blogs',
    element: <BlogPage />,
  },
  {
    path: 'portfolio',
    element: <PortfolioPage />,
  },
  {
    path: 'project/:id',
    element: <ProjectPage />,
  },
  {
    path: 'careers/:id',
    element: <JobPage />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={BrowserRouter} />
  </StrictMode>,
)
