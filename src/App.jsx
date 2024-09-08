import React from "react";
import { FormContainer } from "./FormContainer";
import { LateralNavBar } from "./components/LateralNavBar";

export const App = () => {
  return (
    <div className="container-fluid justify-content-start m-0">
      <div className="row">
        <div className="col-2" style={{ backgroundColor: "#b1cbee" }}>
          <LateralNavBar />
        </div>
        <div className="col justify-content-center">
          <FormContainer />
        </div>
      </div>
    </div>
  );
};
