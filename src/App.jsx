import React from "react";
import { FormContainer } from "./FormContainer";
import { LateralNavBar } from "./components/LateralNavBar";

export const App = () => {
  return (
    <div className="container-fluid  m-0">
      <div className="row">

          <LateralNavBar />

        <div className="col justify-content-center">
          <FormContainer />
        </div>
      </div>
    </div>
  );
};
