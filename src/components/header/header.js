import Topbar from "./topbar";
import Nav from "./nav";


function Header() {
  return (
    <header className="header" data-test-id="header">
      <Topbar></Topbar>
      <Nav></Nav>
    </header>
  );
}

export default Header;