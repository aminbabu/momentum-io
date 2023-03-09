import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "../layouts/Layout";
import { setTheme } from "../redux/features/settingsSlice/settingsSlice";

const NotFoundPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTheme("dark"));
  }, [dispatch]);

  return (
    <Layout>
      <section className="section__header">
        <h1 className="text-5xl font-bold text-center">404 Not Found</h1>
      </section>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>404 Not Found Page</title>;
