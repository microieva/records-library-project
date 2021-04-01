import React from "react";

import { Header } from "../components/Header";
import { RecordView } from "../components/RecordView";
import { SelectionCart } from "../components/SelectionCart";

const RecordPage = () => {
  return (
    <>
      <Header />
      <RecordView />
      <SelectionCart />
    </>
  );
};

export default RecordPage;
