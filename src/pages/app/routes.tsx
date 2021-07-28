import Dashboard from '../../components/Dashboard';
import Appointment from '../../components/Appointment';
import QuestionAnswer from '../../components/QuestionAnswer';
import Feedback from '../../components/Feedback';
import Payment from '../../components/Payment';
import ListDoctors from '../../components/AdminDoctors/ListDoctors';
import { SelectQuiz } from '../../components/Quiz/SelectQuiz';

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
    path: '/app/doctor',
    exact: true,
    component: ListDoctors,
  },
  {
    path: '/app/psychology-test',
    exact: true,
    component: SelectQuiz,
  },
  {
    path: '/app/questionanswer',
    exact: true,
    component: QuestionAnswer,
  },
  {
    path: '/app/feedback',
    exact: true,
    component: Feedback,
  },
  {
    path: '/app/payment',
    exact: true,
    component: Payment,
  },
];
