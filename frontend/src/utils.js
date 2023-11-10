import { routes } from "./constant";

export const getPageHeading = (path) => {
  const name = path.split("/");
  return routes.find((route) => route.path.includes(name[1])).name;
};
