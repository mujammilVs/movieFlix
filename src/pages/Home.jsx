import React from "react";

const Home = () => (
  <div
    style={{
      backgroundColor: "#000",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div></div>
    <h1 style={{ color: "white" }}>{t("Home")}</h1>
  </div>
);

export default Home;
