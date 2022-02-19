import React from "react";
import Head from "next/head";
import styled from "styled-components";

export default function Layout({ title, keywords, desc, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="keywords" content={keywords} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <LayoutContainer>{children}</LayoutContainer>
    </div>
  );
}

Layout.defaultProps = {
  title: "Product Feeback",
  desc: "Post your feedback for any product",
  keywords: "product, feedback",
};

const LayoutContainer = styled.div`
  max-width: 1150px;
  margin: auto;
  padding: 94px 20px 50px 20px;

  @media only screen and (max-width: 1070px) {
    padding-top: 56px;
  }

  @media only screen and (max-width: 500px) {
    padding-top: 34px;
  }
`;
