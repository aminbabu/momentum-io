import React from "react";
import Layout from "../layouts/Layout";

const NotFoundPage = () => {
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
