import Dashboard from '../../components/Dashboard';
import Appointment from '../../components/Appointment';
import PsychologyTest from '../../components/PsychologyTest';
import Feedback from '../../components/Feedback';

export const routes = [
  {
    path: '/app/dashboard',
    exact: true,
    component: Dashboard,
  },
  {
    path: '/app/appointment',
    exact: true,
    component: Appointment,
  },
  {
    path: '/app/psychology-test',
    exact: true,
    component: PsychologyTest,
  },
  {
    path: '/app/questionanswer',
    exact: true,
    component: PsychologyTest,
  },
  {
    path: '/app/feedback',
    exact: true,
    component: Feedback,
  },
  {
    path: '/app/payment',
    exact: true,
    component: PsychologyTest,
  },
];
