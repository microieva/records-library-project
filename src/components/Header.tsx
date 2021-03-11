import React from "react";
import { Link } from "react-router-dom";

//import { User } from '../types';
import "../scss/header.scss";

type HeaderProps = {
  user: boolean;
};

export const Header = (props: HeaderProps) => {
  const { user } = props;
  return (
    <header>
      {!user ? (
        <nav>
          <h1>Welcome to My Records!</h1>
          <div className="btn-group">
            <Link
              to={"/google/login"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button className="btn">Sign In</button>
            </Link>

            <button className="btn">Sing Up</button>
          </div>
        </nav>
      ) : (
        <nav>
          <h1>Welcome {user}!</h1>
          <div className="btn-group">
            <button className="btn">Selected Records</button>
          </div>
        </nav>
      )}
    </header>
  );
};
