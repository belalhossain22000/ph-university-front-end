import { ReactNode } from "react";
import AdminDashbord from "../pages/admin/AdminDashbord";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudents from "../pages/admin/CreateStudents";
import { NavLink } from "react-router-dom";

type TRoutes = {
  path: string;
  element: ReactNode;
};
type TSidebarItems = {
  key: string;
  label: ReactNode;
  children?: TSidebarItems[];
};

const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashbord />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudents />,
      },
    ],
  },
];

//making admin sidebar navigation menu

export const adminSidebarItems = adminPaths.reduce(
  (acc: TSidebarItems[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }
    return acc;
  },
  []
);

//making routes
export const adminRoutes = adminPaths.reduce((acc: TRoutes[], item) => {
  if (item.path && item.element) {
    acc.push({ path: item.path, element: item.element });
  }

  if (item.children) {
    item.children.forEach((child) => {
      acc.push({ path: child.path, element: child.element });
    });
  }

  return acc;
}, []);
