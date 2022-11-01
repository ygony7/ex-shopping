import { Outlet } from "react-router-dom";
import NavbarComp from "../components/NavbarComp";

const Layout = () => {
    return (  
        <div>
            {/** 네브바 공간 */}
            <NavbarComp />
            {/** outlet을 통해서 화면 구성 */}
            <div className="mt-3">
                <Outlet />
            </div>
            
        </div>
    );
}

export default Layout;