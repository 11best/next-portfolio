import React from "react";
import Footer from "./footer";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
