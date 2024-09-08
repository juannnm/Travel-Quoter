import React, { Children } from "react";

export const Container = ({ children }) => {
  return (
    <div
      className="container-lg"
      style={{
        background: "#b1cbee",
        borderradius: " 16px",
        boxshadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropfilter: "blur(9.8px)",
        borderRadius: "20px",
        padding: "15px",
      }}
    >
      {Children.map(children, (child) => child)}
    </div>
  );
};
