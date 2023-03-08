import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "../layouts/Layout";
import { setTheme } from "../redux/features/settingsSlice/settingsSlice";

const WorkPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTheme("dark"));
  }, [dispatch]);

  return <Layout>Work page</Layout>;
};

export default WorkPage;

export const Head = () => <title>Work</title>;
