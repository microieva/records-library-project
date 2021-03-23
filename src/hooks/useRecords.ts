import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchRecords } from "../redux/actions/records";

export const useRecords = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecords());
  }, [dispatch]);
};
