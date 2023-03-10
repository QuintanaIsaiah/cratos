import { Button } from "reactstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import Login from "./Login";
import Register from "./Register";

const Inicio = () => {
  const [selectLogin, setSelectLogin] = useState(false);
  const [selectRegister, setSelectRegister] = useState(false);

  const handleLoginClick = () => {
    setSelectLogin(true);
    setSelectRegister(false);
  };

  const handleRegisterClick = () => {
    setSelectLogin(false);
    setSelectRegister(true);
  };

  const handleBackClick = () => {
    setSelectLogin(false);
    setSelectRegister(false);
  };


  if (selectLogin) {
    return (
      <>
          <Login onSelectLogin={handleLoginClick} />
        <Button onClick={handleBackClick} className="btnBack">
          Volver
        </Button>
      </>
    );
  }

  if (selectRegister) {
    return (
      <>
        <Register
          onSelectLogin={handleLoginClick} />
        <Button onClick={handleBackClick} className="btnBack">
          Volver
        </Button>
      </>
    );
  }

  return (
    <>
      <div className="mainContainer">
        <h1>Cratos</h1>
        <Button
          type="submit"
          color="primary"
          className="btnInicio"
          onClick={handleLoginClick}
        >
          Log in
        </Button>
        <Button
          type="submit"
          color="primary"
          className="btnInicio"
          onClick={handleRegisterClick}
        >
          Register
        </Button>
      </div>
    </>
  );
};

export default Inicio;
