import React from "react";

export const LateralNavBar = () => {
  return (
    <div className="d-flex flex-column" style={{ height: "100vh" }}>
      <button
        type="button"
        class="btn btn-primary mb-3 mt-5 mx-1  text-start"
      >
        Cotizador
      </button>
      <button type="button" class="btn btn-secondary mb-3 mt-2 mx-1  text-start" disabled>
        Pasajeros
      </button>
      <button type="button" class="btn btn-secondary mb-3 mt-2 mx-1  text-start" disabled>
        Hoteles
      </button>
      <button type="button" class="btn btn-secondary mb-3 mt-2 mx-1  text-start" disabled>
        Servicios
      </button>
    </div>
  );
};
