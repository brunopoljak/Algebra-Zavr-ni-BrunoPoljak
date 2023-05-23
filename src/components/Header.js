const Header = (props) => {
  /* !! ispred props.username pretvara vrijednost u boolean vrijednost */
  const isLoggedIn = !!props.username;
  return (
    <>
      {/* Prazan react fragment, služi istu svrhu kao i div, ali manje opterećuje DOM */}
      {isLoggedIn && (
        <div className="App-header">
          <button className="sidebar-btn" onClick={props.toggleSidebar}>
            Sidebar
          </button>
          <button className="dropdown">
            <button className="dropbtn">
              {props.username[0]}
              <div className="dropdown-content">
                <a href="#">Registracija</a>
                <a href="#">Link 2</a>
                <button
                  href="#"
                  className="headerbtn"
                  onClick={props.handleLogout}
                >
                  Logout
                </button>
              </div>
            </button>
          </button>
        </div>
      )}
    </>
  );
};
export default Header;
