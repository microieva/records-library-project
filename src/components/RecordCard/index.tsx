import React from "react";
import { useSelector } from "react-redux";

import { Record, AppState } from "../../types";

import { AdminRecordCard } from "./AdminRecordCard";
import { UserRecordCard } from "./UserRecordCard";

type RecordCardProps = {
  record: Record;
};

export const RecordCard = (props: RecordCardProps) => {
  const { record } = props;
  const admin = useSelector((state: AppState) => state.user.isAdmin);
  //const available = record.available;

  //edit: LINK TO RECORD-PAGE, cond.rendering with filled in inputs
  //delete: MAKE RED, will delete item from api
  return admin ? (
    <AdminRecordCard record={record} />
  ) : (
    <UserRecordCard record={record} />
  );
};
