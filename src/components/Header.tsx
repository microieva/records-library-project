import React from "react";
import { useSelector } from "react-redux";

import { AppState } from "../types";

import { SelectionCart } from "../components/SelectionCart";
import { RecordInput } from "../components/RecordInput";
import { PlainHeader } from "../components/PlainHeader";
import { UserHeader } from "../components/UserHeader";
import { AdminHeader } from "../components/AdminHeader";

import "../scss/header.scss";

export const Header = () => {
  const user = useSelector((state: AppState) => state.user);

  //add 3rd cond if user.isAdmin, Selection -> Add New Record
  return (
    <header>
      <SelectionCart />
      <RecordInput />
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
