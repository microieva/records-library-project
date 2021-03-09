import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchData } from "../redux/actions/records";

export const useRecords = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
};
