import type { RouteObject } from "react-router-dom";
import { allRoutes } from "./allRoutes";
import Login from "../../features/auth/pages/Login";
import HomeDashboard from "../../features/Home/HomeDashboard";
import Tasks from "../../features/tasks/components/Tasks";
import OfficeDefinition from "../../features/setting_permission/office/OfficeDefinition";



export const publicRoutes:RouteObject[]=[
{
path:allRoutes.homeDashboard,
element:<HomeDashboard/>,
},
{
    path:allRoutes.home,
element:<HomeDashboard/>
},
{
    path:allRoutes.tasks,
    element:<Tasks/>
},
{
    path:allRoutes.officeDefinition,
    element:<OfficeDefinition/>
}

];

export const authRoutes:RouteObject[]=[
    {
        path:allRoutes.login,
        element:<Login/>
    }
]