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
`;
