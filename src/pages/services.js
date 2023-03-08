import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "../layouts/Layout";
import { setTheme } from "../redux/features/settingsSlice/settingsSlice";

const ServicesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTheme("dark"));
  }, [dispatch]);

  return <Layout>Services page</Layout>;
};

export default ServicesPage;

export const Head = () => <title>Services</title>;
