import Layout from "../components/layout";
import React from "react";
import EmptyPagePlaceholder from "../components/EmptyPagePlaceholder";

const AuthorsPage = () => {
  return (
    <Layout pageTitle={"Authors | DCCN'2022"} active="authors">
      <section className="container mx-auto md:w-3/4 px-4 md:px-0" id="top">
        <EmptyPagePlaceholder
          imageName="undraw_Designer_by46.svg"
          imageAlt="Working hard image"
        >
          <p className="md:text-xl mb-0">
            We are preparing instructions for authors.
          </p>
        </EmptyPagePlaceholder>
      </section>
    </Layout>
  );
};

export default AuthorsPage;
