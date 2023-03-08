import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "../layouts/Layout";
import { setTheme } from "../redux/features/settingsSlice/settingsSlice";

const ContactPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTheme("dark"));
  }, [dispatch]);

  return <Layout>Contact page</Layout>;
};

export default ContactPage;

export const Head = () => <title>Contact</title>;
