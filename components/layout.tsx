import React from "react";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <main>{props.children}</main>
    </>
  );
}
