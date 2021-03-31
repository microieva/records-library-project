import React from "react";

import { Header } from "../components/Header";
import { SelectionCart } from "../components/SelectionCart";
import { List } from "../components/List";

const HomePage = () => {
  return (
    <>
      <Header />
      <List />
      <SelectionCart />
    </>
  );
};

export default HomePage;
