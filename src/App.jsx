import React from "react";
import { FormContainer } from "./FormContainer";
import { LateralNavBar } from "./components/LateralNavBar";
import TravelQuoteForm from "./components/travel-quote-form";

export const App = () => {
  return (
    <div className="container-fluid  m-0">
      <div className="row">

          <LateralNavBar />

        <div className="col justify-content-center">
          <TravelQuoteForm />
        </div>
      </div>
    </div>
  );
};
