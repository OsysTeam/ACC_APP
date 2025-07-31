import type { RouteObject } from "react-router-dom";
import { allRoutes } from "./allRoutes";
import Login from "../../features/auth/pages/Login";
import HomeDashboard from "../../features/Home/HomeDashboard";
import Tasks from "../../features/tasks/components/Tasks";
import OfficeDefinition from "../../features/setting_permission/office/OfficeDefinition";
import AddBranchOff from "../../features/setting_permission/office/AddBranchOff";
import UserPermission from "../../features/setting_permission/userPermission/UserPermission";
import EmployeeData from "../../features/HR/EmployeeData";
import ContractForm from "./../../features/HR/ContractForm";

export const publicRoutes: RouteObject[] = [
  {
    path: allRoutes.homeDashboard,
    element: <HomeDashboard />,
  },
  {
    path: allRoutes.home,
    element: <HomeDashboard />,
  },
  {
    path: allRoutes.tasks,
    element: <Tasks />,
  },
  {
    path: allRoutes.officeDefinition,
    element: <OfficeDefinition />,
  },
  {
    path: allRoutes.addbranchoff,
    element: <AddBranchOff />,
  },
  {
    path: allRoutes.userpermission,
    element: <UserPermission />,
  },
  {
    path: allRoutes.employeedata,
    element: <EmployeeData />,
  },
  {
    path: allRoutes.contractform,
    element: <ContractForm />,
  },
];
export const authRoutes: RouteObject[] = [
  {
    path: allRoutes.login,
    element: <Login />,
  },
];
