import React from "react";

const Navbar = (props) => {
  if (props.isLoading) return <div>Loading...</div>;
  if (props.error) return <div>{props.error.message}</div>;

  return (
    <nav className={props.styles}>
      {props.user ? (
        <a href="/api/auth/logout">
          <button>Logout</button>
        </a>
      ) : (
        <a href="/api/auth/login">
          <button>Please Login</button>
        </a>
      )}
    </nav>
  );
};

export default Navbar;
