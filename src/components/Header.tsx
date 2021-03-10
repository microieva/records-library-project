import React from "react";

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
            <button className="btn">Sing In</button>
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
