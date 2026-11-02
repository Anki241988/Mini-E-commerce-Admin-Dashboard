import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="nav-right">
        <Link className="linkStyles" to="/"><p>Dashboard</p></Link>
        <Link className="linkStyles"to="/about"><p>About</p></Link>
      </div>
    </aside>
  );
}

export default Sidebar;
