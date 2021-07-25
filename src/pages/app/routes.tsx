import Dashboard from '../../components/Dashboard';
import Appointment from '../../components/Appointment';
import PsychologyTest from '../../components/PsychologyTest';
import QuestionAnswer from '../../components/QuestionAnswer';
import PsyTest from '../../components/Psytest';

export const routes = [
  {
    path: '/dashboard',
    // exact: true,
    component: <Dashboard />,
  },
  {
    path: '/appointment',
    exact: true,
    component: <Appointment />,
  },
  {
    path: '/psychology-test',
    exact: true,
    component: <PsychologyTest />,
  },
  {
    path: '/questionAnswer',
    component: <QuestionAnswer />,
  },
  {
    path: '/psyTest',
    component: <PsyTest />,
  },
];
