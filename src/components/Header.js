const Header = (props) => {
  /* !! ispred props.username pretvara vrijednost u boolean vrijednost */
  const isLoggedIn = !!props.username;
  return (
    <>
      {/* Prazan react fragment, služi istu svrhu kao i div, ali manje opterećuje DOM */}
      {isLoggedIn && (
        <div className="App-header">
          <button
            type="checkbox"
            className="openSidebarMenu btn"
            id="openSidebarMenu"
            onClick={props.toggleSidebar}
          >
            <div for="openSidebarMenu" className="sidebarIconToggle">
              <div className="spinner diagonal part-1"></div>
              <div className="spinner horizontal"></div>
              <div className="spinner diagonal part-2"></div>
            </div>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="25"
                    viewBox="0 -960 960 960"
                    width="25"
                    fill="white"
                  >
                    <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h291v60H180v600h291v60H180Zm486-185-43-43 102-102H375v-60h348L621-612l43-43 176 176-174 174Z" />
                  </svg>
                  &nbsp; Logout
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
