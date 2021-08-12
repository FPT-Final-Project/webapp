import Dashboard from '../../components/Dashboard';
import Appointment from '../../components/Appointment';
import Feedback from '../../components/Feedback';
import Payment from '../../components/Payment';
import ListDoctors from '../../components/AdminDoctors/ListDoctors';
import { Quizzes } from '../../components/Quiz/SelectQuiz';
import Forum from '../../components/Forum';
import ProfileUser from '../../components/Profile/ProfileUser';
import ProfileDoctor from '../../components/Profile/ProfileDoctor';
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
  },
  {
    path: '/psychology-test',
    exact: true,
    component: Quizzes,
  },
  {
    path: '/forum',
    exact: true,
    component: Forum,
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
    sideBarHidden: true,
  },
  {
    path: '/profileUser',
    exact: true,
    component: ProfileUser,
    sideBarHidden: true,
  },
  {
    path: '/profileDoctor',
    exact: true,
    component: ProfileDoctor,
    sideBarHidden: true,
  },
  {
    path: '/doctor/:doctorId/details',
    exact: true,
    component: DoctorDetail,
    sideBarHidden: true,
  },
];
