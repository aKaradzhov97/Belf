import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../layout";
import config from "../../data/SiteConfig";

const HomePage = () => {
  return (
    <Layout>
      <Helmet title={`Home | ${config.siteTitle}`} />
      <h1> ADSD ASDAS DADSD ads D ASD ASD ASD ASD AS D</h1>
    </Layout>
  );
};

export default HomePage;
