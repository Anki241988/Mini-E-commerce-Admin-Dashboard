import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <div className="MainLayout">

      <Navbar />

      <div className="contentBox">
        <Sidebar />

        <main className="mainContent">
          {children}
        </main>
      </div>

      <Footer />

    </div>
  );
}

export default MainLayout;