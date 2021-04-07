import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import PeopleList from 'src/pages/PeopleList';
import Dashboard from 'src/pages/Dashboard';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import CourseList from 'src/pages/CourseList';
import Register from 'src/pages/Register';
import Settings from 'src/pages/Settings';
import Assessments from 'src/pages/Assessments';
import Outcomes from 'src/pages/Outcomes';
const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'people', element: <PeopleList /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'courses', element: <CourseList /> },
      { path: 'settings', element: <Settings /> },
      { path: 'assessments', element: <Assessments /> },
      { path: 'outcomes', element: <Outcomes /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
