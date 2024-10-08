import {Link,Outlet} from "react-router-dom";

const Layout = ()=>{
    return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <h3>Schools</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="./home" className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li class="nav-item">
          <Link to="./allStudent" className="nav-link">All Students</Link>
        </li>
        <li class="nav-item">
          <Link to="./Search" className="nav-link">Search</Link>
        </li>
        <li class="nav-item">
          <Link to="./Form" className="nav-link">Add</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Outlet/>
    </>
    );
}

export default Layout;