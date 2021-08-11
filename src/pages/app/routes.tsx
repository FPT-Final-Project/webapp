import Dashboard from '../../components/Dashboard';
import Appointment from '../../components/Appointment';
import QuestionAnswer from '../../components/QuestionAnswer';
import Feedback from '../../components/Feedback';
import Payment from '../../components/Payment';
import ListDoctors from '../../components/AdminDoctors/ListDoctors';
import { Quizzes } from '../../components/Quiz/SelectQuiz';
import ProfileUser from '../../components/Profile/ProfileUser';
import ProfileDoctor from '../../components/Profile/ProfileDoctor';
import ChangePass from '../../components/ChangPass';
import DoctorDetail from '../../components/AdminDoctors/DoctorDetail';

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
    // component: DoctorDetail,
  },
  {
    path: '/psychology-test',
    exact: true,
    component: Quizzes,
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
  {
    path: '/profileUser',
    exact: true,
    component: ProfileUser,
  },
  {
    // path: '/changePassword',
    path: '/profileDoctor',
    exact: true,
    component: ProfileDoctor,
    // component: ChangePass,
  },
];
