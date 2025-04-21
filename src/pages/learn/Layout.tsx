import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const LearnLayout = () => {
  return (
    <div className="learn-layout">
      <Sidebar />

      <div className="ml-72">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default LearnLayout;
