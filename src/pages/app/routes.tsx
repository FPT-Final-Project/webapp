import Dashboard from '../../components/Dashboard';
import Appointment from '../../components/Appointment';
import QuestionAnswer from '../../components/QuestionAnswer';
import Feedback from '../../components/Feedback';
import Payment from '../../components/Payment';
import ListDoctors from '../../components/AdminDoctors/ListDoctors';
import { Quizzes } from '../../components/Quiz/SelectQuiz';
<<<<<<< HEAD
import Forum from '../../components/Forum';
=======
import ProfileUser from '../../components/Profile/ProfileUser';
import ProfileDoctor from '../../components/Profile/ProfileDoctor';
>>>>>>> 67fd2dd62d04b21ad7872ff901d3c945f149b8b3

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
<<<<<<< HEAD
    path: '/forum',
    exact: true,
    component: Forum,
=======
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
>>>>>>> 67fd2dd62d04b21ad7872ff901d3c945f149b8b3
  },
];
