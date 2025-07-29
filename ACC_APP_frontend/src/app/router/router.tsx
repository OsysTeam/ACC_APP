import {Routes,Route} from 'react-router-dom';
import PublicLayout from "../../layouts/PublicLayout";
import AuthLayout from "../../layouts/AuthLayout";
import { allRoutes } from './allRoutes';
import Tasks from '../../features/tasks/components/Tasks';
import { authRoutes, publicRoutes } from './router.link';

const Router=()=>{
    return(
        <Routes>
           
            {/* صفحه عامه بدون صلاحيات */}
            <Route element={<PublicLayout/>}>
            {publicRoutes.map((route,idx)=>(
                <Route path={route.path} element={route.element} key={idx}/>
            ))}
            </Route>
            {/* صفحه مقيده بعد تسجيل الدخول */}

            <Route element={<AuthLayout/>}>
            {
                authRoutes.map((route,idx)=>(

                    <Route path={route.path} element={route.element} key={idx}/>
                ))
            }
            </Route>
        </Routes>
    );
};
export default Router;