import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "../layouts/Layout";
import { setTheme } from "../redux/features/settingsSlice/settingsSlice";

const NotFoundPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTheme("dark"));
  }, [dispatch]);

  return <Layout>404 Not Found</Layout>;
};

export default NotFoundPage;

export const Head = () => <title>Not Found Page</title>;
