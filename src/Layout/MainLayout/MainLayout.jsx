import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";

const MainLayout = () => {
      return (
            <div style={{
                  textAlign: 'center',
            }}>
                  <Header></Header>
                  <Outlet></Outlet>
            </div>
      );
};

export default MainLayout;