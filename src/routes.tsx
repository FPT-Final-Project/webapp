import Dashboard from "./views/Dashboard";
import Appointment from "./views/Appointment";
import PsychologyTest from "./views/PsychologyTest"

export const routes = [
  {
    path: "/dashboard",
    exact: true,
    component: Dashboard,
  },
  {
    path: "/dashboard/appointment",
    exact: true,
    component:  Appointment,
  },
  {
    path: "/dashboard/psychology-test",
    exact: true,
    component:  PsychologyTest
  }
];
