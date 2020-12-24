import Dashboard from "./container/Dashboard";
import Post from "./container/Post";

export const routes = [
  {
    name: "Dashboard",
    component: Dashboard,
    path: "/dashboard",
    exact: true,
  },
  {
    name: "Post",
    component: Post,
    path: "/post",
    exact: true,
  },
];
