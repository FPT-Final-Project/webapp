import Dashboard from '../../components/Dashboard';
import Appointment from '../../components/Appointment';
import QuestionAnswer from '../../components/QuestionAnswer';
import Feedback from '../../components/Feedback';
import Payment from '../../components/Payment';
import ListDoctors from '../../components/AdminDoctors/ListDoctors';
import { SelectQuiz } from '../../components/Quiz/SelectQuiz';

export const routes = [
  {
    path: '/dashboard',
    exact: true,
    component: Dashboard,
  },
  {
    path: '/appointment',
    exact: true,
    component: Appointment,
  },
  {
    path: '/doctor',
    exact: true,
    component: ListDoctors,
  },
  {
    path: '/psychology-test',
    exact: true,
    component: SelectQuiz,
  },
  {
    path: '/questionanswer',
    exact: true,
    component: QuestionAnswer,
  },
  {
    path: '/feedback',
    exact: true,
    component: Feedback,
  },
  {
    path: '/payment',
    exact: true,
    component: Payment,
  },
];
