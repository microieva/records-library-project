import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchUser } from "../redux/actions/user";

export const useUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
};
