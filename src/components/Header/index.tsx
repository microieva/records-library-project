import React from "react";
import { useSelector } from "react-redux";

import { AppState } from "../../types";

import { SelectionCart } from "../SelectionCart";
import NewRecord from "../NewRecord";
import { PlainHeader } from "./PlainHeader";
import { UserHeader } from "./UserHeader";
import { AdminHeader } from "./AdminHeader";

import "../../scss/header.scss";

export const Header = () => {
  const user = useSelector((state: AppState) => state.user);

  //add 3rd cond if user.isAdmin, Selection -> Add New Record
  return (
    <header>
      <SelectionCart />
      <NewRecord />
      {!user.name ? (
        <PlainHeader />
      ) : user.isAdmin ? (
        <AdminHeader />
      ) : (
        <UserHeader />
      )}
    </header>
  );
};
