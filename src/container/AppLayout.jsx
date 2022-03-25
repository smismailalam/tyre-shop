import {
    Navigation ,
    Footer
} from "../components";
import { Outlet } from "react-router-dom";
const AppLayout = () => (
    <>
      <Navigation />
      <main>
        <div>
          <Outlet /> 
        </div>
      </main>
      <Footer />
    </>
);
export default AppLayout;