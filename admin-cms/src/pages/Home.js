import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <>
      <div className='wrapper'>
        <Sidebar />
        <section id='content'>
          <section className='dashboard-overview'>
            {/* Inspection List */}

            <Outlet />
          </section>
        </section>
      </div>
    </>
  );
}

export default Home;
