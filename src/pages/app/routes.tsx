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
import ChangePass from '../../components/ChangPass';

export const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/appointment',
    component: Appointment,
  },
  {
    path: '/doctor',
    component: ListDoctors,
    // doctorHidden: true,
  },
  {
    path: '/psychology-test',
    component: Quizzes,
    doctorHidden: true,
  },
  {
    path: '/forum',
    component: Forum,
  },
  {
    path: '/feedback',
    component: Feedback,
  },
  {
    path: '/payment',
    component: Payment,
    sideBarHidden: true,
  },
  {
    path: '/profileUser',
    component: ProfileUser,
    sideBarHidden: true,
  },
  {
    path: '/profileDoctor',
    component: ProfileDoctor,
    sideBarHidden: true,
  },
  {
    path: '/doctor/:doctorId/details',
    component: DoctorDetail,
    sideBarHidden: true,
  },
  {
    path: '/changePassword',
    component: ChangePass,
    sideBarHidden: true,
  },
];
