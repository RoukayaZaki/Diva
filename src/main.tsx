import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import ContactPage from './pages/ContactPage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import ServicePage from './pages/ServicePage.tsx'
import TermsPage from './pages/TermsPage.tsx'
import CareerPage from './pages/CareerPage.tsx'
import FAQPage from './pages/FAQPage.tsx'
import BlogPage from './pages/BlogPage.tsx'
import PortfolioPage from './pages/PortfolioPage.tsx'
import ProjectPage from './pages/ProjectPage.tsx'
import JobPage from './pages/JobPage.tsx'

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/services',
    element: <ServicePage />,
  },
  {
    path: '/terms',
    element: <TermsPage />,
  },
  {
    path: 'Careers',
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
