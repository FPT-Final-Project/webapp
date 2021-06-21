import Dashboard from "./views/Dashboard";
import Appointement from "./views/Appointement";
import PsychologyTest from "./views/PsychologyTest"
export const routes = [
  {
    path: "/",
    exact: true,
    component: Dashboard,
  },
  {
    path: "/appointement",
    component:  Appointement,
  },
  {
    path: "/psychology-test",
    component:  PsychologyTest
  }
];
