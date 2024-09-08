import { Container } from "./components/Container";

export const FormContainer = () => {
  return (
    <div className="container-fluid ">
      <form method="post" style={{ width: "100%"}}>
        <Container>
          <h1 className="mb-5">Aereos</h1>
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control mb-4  "
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </Container>
      </form>
    </div>
  );
};
