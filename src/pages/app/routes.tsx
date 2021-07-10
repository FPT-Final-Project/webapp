import Dashboard from '../../components/Dashboard';
import Appointment from '../../components/Appointment';
import PsychologyTest from '../../components/PsychologyTest';
import { SelectQuiz } from '../../components/Quiz/SelectQuiz';

export const routes = [
  {
    path: '/dashboard',
    // exact: true,
    component: Dashboard,
  },
  {
    path: '/appointment',
    // exact: true,
    component: Appointment,
  },
  {
    path: '/psychology-test',
    // exact: true,
    component: PsychologyTest,
  },
  {
    path: '/aaaaa',
    component: SelectQuiz,
  },
];
